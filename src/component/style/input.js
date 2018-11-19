import styled from 'styled-components';
import { border, color, fontFamily, fontSize, fontWeight } from './primitives.js';

export const TextInput = styled.input`
  background-color: ${color.white};
  border-radius: ${border.radiusPrimary};
  border: ${border.greyDark};
  box-sizing: border-box;
  color: ${color.black};
  font-family: ${fontFamily.secondary}
  font-size: ${fontSize.secondary};
  font-weight: ${fontWeight.secondary};
  height: 44px;
  padding: 8px 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
