import styled from 'styled-components';
import { border, color, fontFamily, fontSize, fontWeight } from './primitives.js';

export const Button = styled.button`
  background-color: ${color.black};
  border-radius: ${border.radiusPrimary};
  border: ${border.black};
  box-sizing: border-box;
  color: ${color.white};
  font-family: ${fontFamily.primary};
  font-size: ${fontSize.secondary};
  font-weight: ${fontWeight.primary};
  height: 44px;
  letter-spacing: 1px;
  padding: 8px 14px;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${color.white};
    color: ${color.black};
  }
`;
