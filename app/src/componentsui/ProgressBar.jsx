import styled, { css } from 'styled-components';

const StyledProgressBar = styled.progress`
  appearance: none;
  width: 384px;
  margin: 0.6rem 0.4rem 0.6rem 0;
  ::-webkit-progress-bar {
    background-color: #f0f4f3;
    border-radius: 3rem;
  }

  ::-webkit-progress-value {
    background: linear-gradient(90deg, #0abb87 6.77%, #6fd466 93.23%);
    border-radius: 3rem;
  }
  ${(props) => {
    const { width } = props;
    return css`
      width: ${width};
    `;
  }}
`;

export const ProgressBar = (props) => {
  return <StyledProgressBar {...props} />;
};
