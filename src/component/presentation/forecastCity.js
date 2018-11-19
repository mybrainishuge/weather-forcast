import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { TitlePrimary } from '..';

export const ForecastCity = ({ city }) => (
  <Row center="xs">
    <Col xs={12}>
      <TitlePrimary>{city}</TitlePrimary>
    </Col>
  </Row>
);
