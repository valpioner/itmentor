import { css } from 'styled-components';

export const device = {
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 992px)`,
  laptop_xl: `(min-width: 1200px)`
};

export const container = css`
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 1140px;

  // @media ${device.tablet} {
  //   max-width: 720px;
  // }

  // @media ${device.laptop} {
  //   max-width: 960px;
  // }

  // @media ${device.laptop_xl} {
  //   max-width: 1140px;
  // }
`;
