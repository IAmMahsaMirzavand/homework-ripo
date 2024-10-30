import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);

  const totalPrice = cartItems && Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + parseFloat(item.price), 0)
    : 0;

  return (
    <header className="contact-background-image">
      <Navbar expand="lg" variant="dark" className="p-3">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Image src='/light-mode.png' className='logo' />
            <span className="text-black ms-2">Plants Store</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home" className="text-black">Home</Nav.Link>
              <Nav.Link href="#about" className="text-black">About</Nav.Link>
              <Nav.Link href="#contact" className="text-black">Contact</Nav.Link>
              <Nav.Link as={Link} to="/Checkout" className="text-black">
                ${totalPrice.toFixed(2)} <i className="bi bi-cart2"></i>
                {cartItems.length > 0 && <span>({cartItems.length})</span>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header-content position-absolute bottom-0 start-0 mb-4 ms-4">
        <h3 className="text-black">Best Quality Plants</h3>
        <h1 className="text-black">
          Amazing Variety<br />
          Of Plants Starting<br />
          Just $12
        </h1>
        <button className="shop-now-button">SHOP NOW</button>
      </div>
    </header>
  );
};

export default Header;
