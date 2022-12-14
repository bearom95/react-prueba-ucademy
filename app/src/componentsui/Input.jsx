import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ::placeholder {
    font-family: 'Poppins';
    padding: 0 0 0 0.7rem;
    color: white;
  }
  ${(props) => {
    const { backgr, display, flexwrap, flexdir, objectfit, all, border } = props;
    return css`
      background-color: ${backgr};
      display: ${display};
      flex-wrap: ${flexwrap};
      flex-direction: ${flexdir};
      object-fit: ${objectfit};
      all: ${all};
      border: ${border};
    `;
  }}
`;
export const Input = (props) => {
  return <StyledInput {...props}></StyledInput>;
};

const StyledInputModal = styled.input`
  height: 30px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  ${(props) => {
    const { width } = props;
    return css`
      width: ${width};
    `;
  }}
`;
export const InputModal = (props) => {
  return <StyledInputModal {...props}></StyledInputModal>;
};
