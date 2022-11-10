import styled, { css } from 'styled-components';

export const StyledAnchor = styled.a`
  all: unset;
  cursor: pointer;
  ${(props) => {
    const { color, fontsize } = props;
    return css`
      color: ${color};
      font-size: ${fontsize};
    `;
  }};
`;
export const Anchor = (props) => {
  return <StyledAnchor {...props}></StyledAnchor>;
};
