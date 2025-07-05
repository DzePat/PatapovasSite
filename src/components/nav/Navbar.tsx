import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import "./Navbar.css";
import Sign from '../Sign';

const Navbar: React.FC = () => {
    const {isAuthenticated} = useAuth0();
  return (
    <nav className="navBar">
      <NavLink className="navItem" to="/">Home</NavLink>
      <NavLink className="navItem" to="/projects">Projects</NavLink>
      <NavLink className="navItem" to="/about">About</NavLink>
     {isAuthenticated && (
         <>
          <NavLink className="navItem" to="/dashboard">Dashboard</NavLink>
         </>
     )}
      <Sign/>
    </nav>
  );
};

export default Navbar;