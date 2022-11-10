import { NavLink } from 'react-router-dom';

export const FakeNav = () => {
  return (
    <header>
      <NavLink to="/">Login</NavLink>
      <NavLink to="dashboard/students">Students</NavLink>
      <NavLink to="dashboard/teachers">Teachers</NavLink>
    </header>
  );
};
