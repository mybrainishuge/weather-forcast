import styled, { css } from 'styled-components';
import { color, fontFamily, fontSize, fontWeight, lineHeight } from './primitives.js';

const common = css`
  color: ${({ textColor }) => textColor || color.black};
  display: inline;
  font-family: ${fontFamily.primary};
  font-weight: ${fontWeight.primary};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const TitlePrimary = styled.h1`
  ${common}
  font-size: ${fontSize.primary};
  line-height: ${lineHeight.primary};
`;

export const TitleSecondary = styled.h2`
  ${common}
  font-size: ${fontSize.secondary};
  line-height: ${lineHeight.secondary};
`;

export const TitleTertiary = styled.h3`
  ${common}
  font-size: ${fontSize.tertiary};
  line-height: ${lineHeight.tertiary};
`;
