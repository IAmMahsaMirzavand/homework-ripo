// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
  return (


    <header  className='contact-background-image'>
        

    <Navbar  expand="lg">
      <Container >
        <Navbar.Brand href="#home" >Plants Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" style={{marginLeft:'700px'}}>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   <h3>Best Qua;ity Plants</h3>
   <h1>Amazing Variety
Of Plants Starting
Just $12</h1>
<button>SHOP NOW</button>

    </header>
   
  );
};

export default Header;
