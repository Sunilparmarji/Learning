import React from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header () {
    return (
        <>
        <div className='headerWrapper'>
        <Navbar bg="dark" fixed='top' data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="home" className='text-decoration-none ps-2'>Home</Link>
            <Link to="team" className='text-decoration-none ps-2'>Team</Link>
            <Link to="contact" className='text-decoration-none ps-2'>Contact Us</Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
        
        </>
    );
}
export default Header;