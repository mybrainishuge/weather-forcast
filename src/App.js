import React, { Component } from 'react';
import axios from 'axios';
import { ForecastTable, Heading, SearchForm, Spacer, TemperatureUnits } from './component';
import { capitalizeWords, getCardinalDirection, getDateParts } from './helper.js';

class App extends Component {
  constructor() {
    super();
    this.state = { city: '', forecast: [], search: '', unit: 'imperial' };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { search, unit } = this.state;
      const speedUnit = unit === 'imperial' ? 'mph' : 'kph';
      const tempUnit = unit === 'imperial' ? 'F' : 'C';
      const searchType = isNaN(search) ? 'q' : 'zip';
      const endpoint = `http://api.openweathermap.org/data/2.5/forecast?${searchType}=${search}&units=${unit}&APPID=${
        process.env.REACT_APP_OPENWEATHERMAP_API_KEY
      }`;
      const { data } = await axios.get(endpoint);
      const daysOrder = [];

      const forecastByDay = data.list.reduce((groupedBy, { dt_txt, main, weather, wind }) => {
        const { day, shortDate, time } = getDateParts(dt_txt);
        if (!groupedBy[day]) {
          daysOrder.push(day);
          groupedBy[day] = [];
        }
        groupedBy[day].push({
          day,
          description: capitalizeWords(weather[0].description),
          humidity: main.humidity,
          icon: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
          shortDate,
          temp: `${Math.round(main.temp_max)} / ${Math.round(main.temp_min)} °${tempUnit}`,
          time,
          wind: `${getCardinalDirection(wind.deg)} ${Math.round(wind.speed)} ${speedUnit}`,
        });
        return groupedBy;
      }, {});

      this.setState({
        city: data.city.name,
        forecast: daysOrder.map(day => forecastByDay[day]),
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { city, forecast, search, unit } = this.state;
    return (
      <>
        <Heading city={city} />

        <SearchForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          search={search}
        />

        <TemperatureUnits handleChange={this.handleChange} unit={unit} />
        <Spacer height="20px" />

        <ForecastTable city={city} forecast={forecast} />
      </>
    );
  }
}

export default App;
