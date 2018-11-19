import React from 'react';
import { ForecastCity, Spacer, ForecastTableHeader, ForecastTableDay } from '..';

export const ForecastTable = ({ city, forecast }) =>
  city && (
    <>
      <ForecastCity city={city} />
      <Spacer height="20px" />
      <ForecastTableHeader />

      {forecast.map(day => (
        <ForecastTableDay day={day} key={day[0].day} />
      ))}
    </>
  );
