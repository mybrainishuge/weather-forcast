import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';
import { TitleSecondary } from '..';
import { color } from '../style/primitives';

const ColUnderline = styled(Col)`
  border-bottom: 1px solid ${color.black};
`;

export const ForecastTableDayName = ({ name }) => (
  <Row>
    <Col xs={0} sm={0} md={1} lg={1} xl={2} />
    <ColUnderline xs={12} sm={12} md={10} lg={10} xl={8}>
      <TitleSecondary>{name}</TitleSecondary>
    </ColUnderline>
    <Col xs={0} sm={0} md={1} lg={1} xl={2} />
  </Row>
);
