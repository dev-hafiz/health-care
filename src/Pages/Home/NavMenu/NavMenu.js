import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavMenu.css';
import LogoNav from '../../../images-medilife/logonav.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const NavMenu = () => {
  const {user, logOutuser} = useAuth()
     return (
          <Navbar collapseOnSelect expand="lg"  bg="#fff" variant="light">
          <Container>
          <Navbar.Brand className="d-flex justify-content-center align-items-center" as={Link}  to="/home">
          <img
        src={LogoNav}
        width="80"
        height="80"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> <span className="logo-text">Med<span className="i-style">i</span> life</span>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} className="link-style" to="/home">Home</Nav.Link>
            <Nav.Link as={Link} className="link-style" to="/services">Services</Nav.Link>
            <Nav.Link as={Link} className="link-style" to="/doctors">Doctor's</Nav.Link>

            {user.email ? <Nav.Link as={Link} className="link-style"  onClick={logOutuser}  to="#">LogOut</Nav.Link>
            :
            <Nav.Link as={Link} className="link-style"   to="/login">Login</Nav.Link>}
            
            <Nav.Link as={Link} className="link-style" to="/register">Register</Nav.Link>

               <Navbar.Text>
               Profile: <span className="fw-bold">{user.displayName}</span>
               </Navbar.Text>
          </Navbar.Collapse>

          </Container>
        </Navbar>
     );
};

export default NavMenu;