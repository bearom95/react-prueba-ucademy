import styled, { css } from 'styled-components';

const ParrafStyled = styled.p`
  ${(props) => {
    const { backgr, fontcolor, fontsize } = props;
    return css`
      background-color: ${backgr};
      color: ${fontcolor};
      font-size: ${fontsize};
    `;
  }}
`;

export const Parraf = (props) => {
  return <ParrafStyled {...props}></ParrafStyled>;
};

//spread operator te retorna cada entrada de un objeto o un array.
// El SO vacia el objeto, le pasa en las keys los valores que le indico
//y react recoge las keys.
