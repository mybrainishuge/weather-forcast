# Five Day Weather

### Running the app

1. Install dependencies

```sh
> npm install
```

2. Add your OpenWeatherMap API key to `.env` in the root directory

```sh
REACT_APP_OPENWEATHERMAP_API_KEY=YOUR_API_KEY_HERE
```

3. Start server

```sh
> npm start
```

4. open http://localhost:3000 in your web browser

### Testing

```sh
> npm test
```

### Approach

With a general idea for what the app would do, I imagined a basic UI for the app. Before I could begin building that UI, I needed to familiarize myself with Open Weather Map's API to know what data I would have. The API response allowed me to make decisions for what data I would render to the user which directly affects all sorts of UI decision. Since I'm not building world's first weather app, I consulted various well-known weather websites to see what data most of them use and get a feel for what makes for a sensible UI.

With a basic UI in mind, I chose to use React which makes it easy to create reusable components and think about one-way data flow where the app always reflects state. I then selected a few complimentary libraries to make my life a little easier. `react-flexbox-grid` gives me grid system for responive page layout. `react-responsive` lets me make arrangement and display decisions based on the window size. `styled-components` lets me create components with encapsulated style. I chose `axios` which simplifies making HTTP requests when the user searches for city/zip code. `momentjs` provides a powerful and simple API for formatting date/time values.

### Trade-offs

- I would like to have implemented this using TypeScript, but TS requires additional setup and organization which likely would've slowed development unnecessarily
- The design could be cleaner and more compact. Would be nice to display minimal data and provide the ability to click on something to reveal more data, but I opted for a less sophisticated layout for the initial implementation
- I like making the frontend as dumb as possible. Relying on the backend to gather, process, and shape payloads can dramatically simplify the frontend. A simpler frontend will most likely reduce app bloat and potentially result in a more performant app. For this project, I

### Future development

- Expand test coverage
- Cleanup handleSubmit method
- Automatic geolocation detection
- Search autocompletion
- Display state/region name along with city
- Better error handling
- Processing animations
- Short "recent searches" list
- Assume temperature unit based on search parameter if user doesn't specify
- Deploy app
