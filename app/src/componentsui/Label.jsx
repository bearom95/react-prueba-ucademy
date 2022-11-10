import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  box-sizing: border-box
    ${(props) => {
      const {
        backgr,
        display,
        flexwrap,
        flexdir,
        objectfit,
        requiredcontent,
        requiredcolor,
        fontsize,
        fontweight,
        align,
        gap,
        height,
      } = props;
      return css`
        background-color: ${backgr};
        display: ${display};
        flex-wrap: ${flexwrap};
        flex-direction: ${flexdir};
        object-fit: ${objectfit};
        font-size: ${fontsize};
        font-weight: ${fontweight};
        align-items: ${align};
        gap: ${gap};
        height: ${height};

        .required:before {
          content: ${requiredcontent};
          color: ${requiredcolor};
        }
      `;
    }};
`;
export const Label = (props) => {
  return <StyledLabel {...props}></StyledLabel>;
};
