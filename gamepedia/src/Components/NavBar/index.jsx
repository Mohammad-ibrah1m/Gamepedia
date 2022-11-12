import React from 'react';
import Style from './style.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import {BsFillAlarmFill} from 'react-icons/bs'
const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" className={Style.navbar + " " + "mx-auto"}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={Style.navItem}>FAQ</Nav.Link>
            <Nav.Link href="#link" className={Style.navItem}>About</Nav.Link>
            <Nav.Link href="#link" className={Style.navItem}>Support</Nav.Link>
            <NavDropdown title="Eng" id="basic-nav-dropdown" className={Style.navItem}>
              <NavDropdown.Item href="#action/3.1">Arabic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                French              
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Spanish</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='d-flex justify-content-center'>
            <Image src =' https://dummyimage.com/50x50/000/fff' thumbnail/>
            <h4 className={Style.user}>Jeremy manning</h4>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  )
}

export default NavBar