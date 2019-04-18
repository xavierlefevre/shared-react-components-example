// @flow

import styled, { css } from 'styled-components';

const OFFSET_CENTER_PX = 10;
const SCALE_RATIO = 0.6;

const LoadingIndicatorStyle = styled.div`
  ${({ centered }) =>
    centered
      ? css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `
      : css`
          position: relative;
        `};

  .loader {
    ${({ loaderSize }) =>
      css`
        height: ${loaderSize}px;
        width: ${loaderSize}px;
        transform: scale(${SCALE_RATIO});
        position: relative;
      `};
  }

  .loader-inner {
    ${({ loaderSize }) =>
      css`
        left: ${loaderSize / 2 - OFFSET_CENTER_PX}px;
        top: ${loaderSize / 2 - OFFSET_CENTER_PX}px;
      `};
  }
`;

export default LoadingIndicatorStyle;
