import styled, { css } from 'styled-components';

export const StyledImg = styled.img`
  ${(props) => {
    const { backgr, flexwrap, padding, flexdir, objectfit, cursor, height, width } =
      props;
    return css`
      background-color: ${backgr};
      flex-wrap: ${flexwrap};
      flex-direction: ${flexdir};
      object-fit: ${objectfit};
      cursor: ${cursor};
      height: ${height};
      width: ${width};
      padding: ${padding};
    `;
  }};
`;
export const Img = (props) => {
  return <StyledImg {...props}></StyledImg>;
};
