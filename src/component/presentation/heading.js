import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Header, TitlePrimary } from '..';
import { color } from '../style/primitives';

export const Heading = () => (
  <Row center="xs">
    <Col xs={12}>
      <Header>
        <TitlePrimary textColor={color.white}>five day forecast</TitlePrimary>
      </Header>
    </Col>
  </Row>
);
