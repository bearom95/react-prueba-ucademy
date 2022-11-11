import './App.css';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Nav } from './components/LateralNav';

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

export const App = () => {
  return (
    <div className="App">
      <Header />
      <StyledMain>
        <Nav />
        <Outlet />
      </StyledMain>
    </div>
  );
};
