import React from 'react';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'react-flexbox-grid';
import { Image } from '..';

export const ForecastTableHour = ({ description, humidity, icon, temp, time, wind }) => (
  <Row center="xs" middle="xs">
    <Col xs={0} sm={0} md={0} lg={0} xl={2} />
    <Col xs={3} sm={2} md={2} lg={1} xl={1}>
      {time}
    </Col>
    <Col xs={2} sm={1} md={1} lg={1} xl={1}>
      <Image src={icon} alt={description} />
    </Col>
    <Col xs={4} sm={3} md={2} lg={2} xl={2}>
      {description}
    </Col>
    <Col xs={3} sm={2} md={2} lg={2} xl={2}>
      {temp}
    </Col>
    <MediaQuery minWidth={576}>
      <Col xs={0} sm={2} md={2} lg={2} xl={1}>
        {wind}
      </Col>
      <Col xs={0} sm={2} md={1} lg={1} xl={1}>
        {humidity}%
      </Col>
      <Col xs={0} sm={0} md={0} lg={0} xl={2} />
    </MediaQuery>
  </Row>
);
