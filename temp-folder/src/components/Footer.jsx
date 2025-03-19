import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10  left-0 w-full">
      {/* Header text with title and soccer icon */}
      <div>
        <h2 className="text-2xl font-bold">
          Daily <i className="fa-solid fa-futbol"></i> Golazo
        </h2>
      </div>
      {/* Navigation links */}
      <nav className="grid grid-flow-col gap-4">
        <NavLink to="/leagues" className="link link-hover">
          Leagues
        </NavLink>
        <NavLink to="/tournaments" className="link link-hover">
          Tournaments
        </NavLink>
        <NavLink to="/standings" className="link link-hover">
          Standings
        </NavLink>
      </nav>
      {/* Copyright */}
      <aside className="mt-4">
        <p>
          Copyright © {new Date().getFullYear()} - Daily Golazo
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
