// @flow

import React from 'react';
import styled from 'styled-components';

const StyledData = styled.pre`
  ${props => (props.isBold ? 'font-weight: bold;' : '')};
`;

export default {
  Container: styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
  `,
  Data: (props: { [string]: any }) => <StyledData {...props} />,
}
