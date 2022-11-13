import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import studenthat from '../assets/studenthat.png';
import { Img } from '../componentsui/Img';
import { Parraf } from '../componentsui/Parraf';
import { Div } from '../componentsui/StyledDiv';
import { Button } from './Button';

const StyledDivDrop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .navlink {
    all: unset;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 13px;
    padding: 1rem 1rem 0.5rem 4rem;
    cursor: pointer;
  }
  .navlink:hover,
  .navlink:focus {
    font-weight: 600;
    color: var(--green);
  }
`;

export const DivDropDown = () => {
  const [showMoreChildren, setShowMoreChildren] = useState(false);
  const toggleChildrenShown = () => {
    setShowMoreChildren(showMoreChildren ? false : true);
  };

  return (
    <StyledDivDrop>
      <Button drop onClick={toggleChildrenShown}>
        <Img src={studenthat} alt="student hat icon" height="21px" />
        <Parraf>Mi academia</Parraf>
      </Button>
      {showMoreChildren ? (
        <Div display="flex" flexwrap="wrap" flexdir="column">
          <NavLink className="navlink" to="/dashboard/students">
            Editar Academia
          </NavLink>
          <NavLink className="navlink" to="/dashboard/students">
            Estudiantes
          </NavLink>
          <NavLink className="navlink" to="/dashboard/teachers">
            Profesores
          </NavLink>
        </Div>
      ) : null}
    </StyledDivDrop>
  );
};
