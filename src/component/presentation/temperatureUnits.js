import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { RadioButton } from '..';

export const TemperatureUnits = ({ handleChange, unit }) => (
  <Row around="xs">
    <Col xs={0} sm={1} md={2} xl={3} />
    <Col xs={4} sm={3} md={2} xl={2}>
      <RadioButton
        checked={unit === 'imperial'}
        handler={handleChange}
        label="Fahrenheit"
        name="unit"
        value="imperial"
      />
    </Col>
    <Col xs={3} sm={3} md={2} xl={1}>
      <RadioButton
        checked={unit === 'metric'}
        handler={handleChange}
        label="Celsius"
        name="unit"
        value="metric"
      />
    </Col>
    <Col xs={3} sm={5} md={6} xl={6} />
  </Row>
);
