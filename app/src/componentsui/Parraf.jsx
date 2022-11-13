import styled, { css } from 'styled-components';

const ParrafStyled = styled.p`
  color: black;

  ${(props) => {
    const {
      backgr,
      fontcolor,
      fontsize,
      fontfamily,
      padding,
      margin,
      fontweight,
      lineheight,
    } = props;
    return css`
      background-color: ${backgr};
      color: ${fontcolor};
      font-size: ${fontsize};
      font-family: ${fontfamily};
      padding: ${padding};
      margin: ${margin};
      font-weight: ${fontweight};
      line-height: ${lineheight};
    `;
  }}
`;

export const Parraf = (props) => {
  return <ParrafStyled {...props}></ParrafStyled>;
};
