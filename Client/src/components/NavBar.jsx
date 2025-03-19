import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-full z-50 px-4 fixed">
      <div className="navbar-start">
        <NavLink 
          to="/schedule" 
          className={({ isActive }) => isActive ? "btn btn-ghost active" : "btn btn-ghost"}
        >
          Schedule
        </NavLink>
        <NavLink 
          to="/standings" 
          className={({ isActive }) => isActive ? "btn btn-ghost active" : "btn btn-ghost"}
        >
          Standings
        </NavLink>
      </div>
      
      <div className="navbar-center">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          Daily<i className="fa-regular fa-futbol"></i>Goalazo
        </NavLink>
      </div>
      
      <div className="navbar-end space-x-4">
        <NavLink 
          to="/leagues" 
          className={({ isActive }) => isActive ? "btn btn-ghost active" : "btn btn-ghost"}
        >
          Leagues
        </NavLink>
        <NavLink 
          to="/tournaments" 
          className={({ isActive }) => isActive ? "btn btn-ghost active" : "btn btn-ghost"}
        >
          Tournaments
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
