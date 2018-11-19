import React from 'react';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'react-flexbox-grid';
import { TitleSecondary } from '..';

export const ForecastTableHeader = () => (
  <Row center="xs" middle="xs">
    <Col xs={0} sm={0} md={0} lg={0} xl={2} />
    <Col xs={3} sm={2} md={2} lg={1} xl={1} />
    <Col xs={2} sm={1} md={1} lg={1} xl={1} />
    <Col xs={4} sm={3} md={2} lg={2} xl={2}>
      <TitleSecondary>description</TitleSecondary>
    </Col>
    <Col xs={3} sm={2} md={2} lg={2} xl={2}>
      <TitleSecondary>high / low</TitleSecondary>
    </Col>
    <MediaQuery minWidth={576}>
      <Col xs={0} sm={2} md={2} lg={2} xl={1}>
        <TitleSecondary>wind</TitleSecondary>
      </Col>
      <Col xs={0} sm={2} md={1} lg={1} xl={1}>
        <TitleSecondary>humidity</TitleSecondary>
      </Col>
      <Col xs={0} sm={0} md={0} lg={0} xl={2} />
    </MediaQuery>
  </Row>
);
