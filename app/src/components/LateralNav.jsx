import styled from 'styled-components';

import book from '../assets/book.png';
import dashboard from '../assets/dashboard.png';
import { Img } from '../componentsui/Img';
import { Parraf } from '../componentsui/Parraf';
import { Div } from '../componentsui/StyledDiv';
import { Button } from './Button';
import { DivDropDown } from './ButtonDropDown';

const StyledNav = styled.nav`
  display: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  width: 15%;
  justify-content: center;
  padding: 1rem 0 0 0;
`;

export const Nav = () => {
  return (
    <StyledNav>
      <Div display="flex" justify="center">
        <Button drop>
          <Img src={dashboard} alt="dashboard icon" height="21px" />
          <Parraf>Cursos</Parraf>
        </Button>
      </Div>
      <DivDropDown></DivDropDown>
      <Div display="flex" justify="center">
        <Button drop>
          <Img src={book} alt="book icon" height="21px" />
          <Parraf>Cursos</Parraf>
        </Button>
      </Div>
    </StyledNav>
  );
};
