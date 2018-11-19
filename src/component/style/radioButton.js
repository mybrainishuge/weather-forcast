import React from 'react';
import styled from 'styled-components';
import { border, color, fontFamily, fontSize, fontWeight, lineHeight } from './primitives.js';

const Radio = styled.input`
  appearance: none;
  background: ${color.white}
  border: ${border.greyDark};
  border-radius: 50%;
  height: 15px;
  margin: 0 5px -2px 0;
  width: 15px;

  &:checked {
    background: ${color.black};
    border: ${border.black};
  }
  `;

const Label = styled.label`
  color: ${color.black};
  font-family: ${fontFamily.secondary};
  font-size: ${fontSize.tertiary};
  font-weight: ${fontWeight.secondary};
  line-height: ${lineHeight.secondary};
  text-transform: uppercase;
`;

export const RadioButton = ({ checked, handler, label, name, value }) => (
  <Label>
    <Radio checked={checked} name={name} onChange={handler} type="radio" value={value} />
    {label}
  </Label>
);
