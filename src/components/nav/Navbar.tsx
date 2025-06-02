import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import "./src/components/nav/Navbar.css";
import Dropdown from '../dropdown/Dropdown';

const Navbar: React.FC = () => {
    const {isAuthenticated} = useAuth0();
  return (
    <nav className="navBar">
     {isAuthenticated && (
         <>
             <NavLink className="navItem" to="/">Home</NavLink>
             <NavLink className="navItem" to="/about">About</NavLink>
             <NavLink className="navItem" to="/user">Profile</NavLink>
         </>
     )}
    <Dropdown/>
    </nav>
  );
};

export default Navbar;