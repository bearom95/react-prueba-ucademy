import styled, { css } from 'styled-components';

export const StyledImg = styled.img`
  ${(props) => {
    const { backgr, display, flexwrap, flexdir, objectfit, cursor } = props;
    return css`
      background-color: ${backgr};
      display: ${display};
      flex-wrap: ${flexwrap};
      flex-direction: ${flexdir};
      object-fit: ${objectfit};
      cursor: ${cursor};
    `;
  }}
`;
export const Img = (props) => {
  return <StyledImg {...props}></StyledImg>;
};
