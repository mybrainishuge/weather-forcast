import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { ForecastTableDayName, ForecastTableHour, Spacer } from '..';

export const ForecastTableDay = ({ day }) => (
  <Row>
    <Col xs={12}>
      <Spacer height="10px" />
      <ForecastTableDayName name={day[0].shortDate} />
      {day.map(({ description, humidity, icon, temp, time, wind }) => (
        <ForecastTableHour
          description={description}
          humidity={humidity}
          icon={icon}
          key={time}
          temp={temp}
          time={time}
          wind={wind}
        />
      ))}
    </Col>
  </Row>
);
