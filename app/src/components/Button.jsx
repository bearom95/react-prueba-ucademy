import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 1rem;

  ${({ eye }) => {
    if (eye) {
      return css`
        all: unset;
        width: 1rem;
        padding-right: 6px;
      `;
    }
  }}
  ${({ black }) => {
    if (black) {
      return css`
        all: unset;
        padding: 4px 15px;
        background-color: black;
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 12.8px;
        border-radius: 8px;
        height: 20.8px;
      `;
    }
  }}
`;

export const Button = ({ children, eye, black, onClick }) => {
  console.log(Button);
  console.log(eye);
  return (
    <StyledButton eye={eye} black={black} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
