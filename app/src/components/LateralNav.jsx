import styled from 'styled-components';

import { Button } from './Button';
import { DivDropDown } from './ButtonDropDown';

const StyledNav = styled.nav`
  display: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  width: 15%;
  justify-content: center;
  /* align-items: center; */
`;

export const Nav = () => {
  return (
    <StyledNav>
      <button>Dash</button>
      <DivDropDown></DivDropDown>
      <Button drop>Cursos</Button>
    </StyledNav>
  );
};
