import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Button, Form, TextInput } from '..';

export const SearchForm = ({ handleChange, handleSubmit, search }) => (
  <Form>
    <Row center="xs">
      <Col xs={0} sm={1} md={2} xl={3} />
      <Col xs={7} sm={7} md={6} xl={5}>
        <TextInput
          name="search"
          onChange={handleChange}
          placeholder="Type city name or zip code"
          value={search}
        />
      </Col>
      <Col xs={4} sm={3} md={2} xl={1}>
        <Button onClick={handleSubmit}>Search</Button>
      </Col>
      <Col xs={0} sm={1} md={2} xl={3} />
    </Row>
  </Form>
);
