import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ${(props) => {
    const { backgr, display, flexwrap, flexdir, objectfit } = props;
    return css`
      background-color: ${backgr};
      display: ${display};
      flex-wrap: ${flexwrap};
      flex-direction: ${flexdir};
      object-fit: ${objectfit};
    `;
  }}
`;
export const Input = (props) => {
  return <StyledInput {...props}></StyledInput>;
};
