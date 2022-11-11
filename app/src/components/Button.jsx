import styled, { css } from 'styled-components';

//cursor pointer no funciona

export const StyledButton = styled.button`
  height: 1rem;
  cursor: pointer;

  ${({ eye }) => {
    if (eye) {
      return css`
        all: unset;
        width: 1rem;
        padding-right: 6px;
      `;
    }
  }}
  ${({ newgreen }) => {
    if (newgreen) {
      return css`
        all: unset;
        width: 175px;
        height: 50px;
        border: 1px solid #0abb87;
        border-radius: 8px;
        color: var(--white);
        justify-content: space-around;
        align-items: center;
        font-weight: 400;
        font-size: 13px;
        font-family: 'Poppins';
        background-color: var(--green);
        display: flex;
        flex-wrap: wrap;
      `;
    }
  }}
  ${({ black }) => {
    if (black) {
      return css`
        all: unset;
        padding: 4px 15px;
        background-color: #262d34;
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 12.8px;
        border-radius: 8px;
        height: 20.8px;
      `;
    }
  }}
   ${({ white }) => {
    if (white) {
      return css`
        all: unset;
        padding: 4px 15px;
        background-color: var(--white);
        color: black;
        font-family: 'Poppins', sans-serif;
        font-size: 12.8px;
        border-radius: 8px;
        height: 20.8px;
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
        border: 1px solid #262d34;
      `;
    }
  }}

${({ underlined }) => {
    if (underlined) {
      return css`
        all: unset;
        padding: 4px 15px;
        color: black;
        font-family: 'Poppins', sans-serif;
        font-size: 12.8px;
        height: 25.8px;
        :hover,
        :focus {
          text-decoration: var(--green) underline 5px;
          font-weight: 600;
        }
      `;
    }
  }}


   ${({ drop }) => {
    if (drop) {
      return css`
        all: unset;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        width: 180px;
        height: 50px;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        gap: 0.6rem;
        font-size: 15px;
        margin: 1rem 0rem;
        :hover,
        :focus {
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
        }
      `;
    }
  }}
`;

export const Button = ({
  children,
  eye,
  black,
  onClick,
  drop,
  newgreen,
  white,
  underlined,
}) => {
  return (
    <StyledButton
      eye={eye}
      black={black}
      drop={drop}
      newgreen={newgreen}
      white={white}
      underlined={underlined}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
