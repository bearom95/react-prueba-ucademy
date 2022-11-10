import './App.css';

import { Outlet } from 'react-router-dom';

import { FakeNav } from './components/FakeNav';

export const App = () => {
  return (
    <div className="App">
      <FakeNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
