import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import "./Navbar.css";
import Sign from '../Sign';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: center;
  z-index: 5;
  position: fixed; 
`
const Navbar: React.FC = () => {
    const {isAuthenticated} = useAuth0();
  return (
    <Container>
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
    </Container>
  );
};

export default Navbar;