// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Container, Row, Col, Card, Button ,Navbar, Nav } from 'react-bootstrap';
// const Header = () => {
  
//   const cartItems = useSelector((state) => state.cartItems);

  
//   const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

//   return (

//     <>
//      <header  className='contact-background-image'>
        

//         <Navbar  expand="lg">
//           <Container >
//             <Navbar.Brand href="#home" >Plants Store</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbar-nav" />
//             <Navbar.Collapse id="navbar-nav" style={{marginLeft:'700px'}}>
//               <Nav className="me-auto">
//                 <Nav.Link href="#home">Home</Nav.Link>
//                 <Nav.Link href="#products">Products</Nav.Link>
//                 <Nav.Link href="#about">About</Nav.Link>
//                 <Nav.Link href="#Checkout"><span>
//             ${totalPrice.toFixed(2)} <i className="bi bi-cart2"></i>
//             {cartItems.length > 0 && <span>({cartItems.length})</span>}
//           </span> Contact</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar> 
        
//        <h3>Best Qua;ity Plants</h3>
//        <h1>Amazing Variety
//     Of Plants Starting
//     Just $12</h1>
//     <button>SHOP NOW</button>
    
//          </header> 
       
//     {/* <div className='header'>
//       <div className='header_end'>
//         <Link to='/Checkout' style={{ textDecoration: 'none', color: 'white' }}>
//           <span>
//             ${totalPrice.toFixed(2)} <i className="bi bi-cart2"></i>
//             {cartItems.length > 0 && <span>({cartItems.length})</span>}
//           </span>
//         </Link>
//       </div> 
//     </div> */}
//     </>
//   );
// };

// export default Header;
  

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Container, Navbar, Nav } from 'react-bootstrap';

// const Header = () => {
//   const cartItems = useSelector((state) => state.cartItems);

 
//   const totalPrice = cartItems && Array.isArray(cartItems)
//     ? cartItems.reduce((total, item) => total + parseFloat(item.price), 0)
//     : 0;

//   return (
//     <>
//       <Navbar className="contact-background-image">
//         <Navbar expand="lg">
//           <Container>
//             <Navbar.Brand as={Link} to="/">Plants Store</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbar-nav" />
//             <Navbar.Collapse id="navbar-nav" style={{ marginLeft: '700px' }}>
//               <Nav className="me-auto">
//                 <Nav.Link as={Link} to="/">Home</Nav.Link>
//                 <Nav.Link as={Link} to="/products">About Us</Nav.Link>
//                 <Nav.Link as={Link} to="/about">Contact Us</Nav.Link>
//                 <Nav.Link as={Link} to="/Checkout">
//                   <span>
//                     ${totalPrice.toFixed(2)} <i className="bi bi-cart2"></i>
//                     {cartItems.length > 0 && <span>({cartItems.length})</span>}
//                   </span>
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         <h3>Best Quality Plants</h3>
//         <h1>Amazing Variety Of Plants Starting Just $12</h1>
//         <button>SHOP NOW</button>
//       </Navbar>
//     </>
//   );
// };

// export default Header;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Container, Navbar, Nav } from 'react-bootstrap';

// const Header = () => {
//   const cartItems = useSelector((state) => state.cartItems);

//   const totalPrice = cartItems && Array.isArray(cartItems)
//     ? cartItems.reduce((total, item) => total + parseFloat(item.price), 0)
//     : 0;

//   return (
//     <header className="contact-background-image"> 
//       <Navbar expand="lg" variant="dark" style={{ position: 'relative' }}> 
//         <Container>
//           <Navbar.Brand as={Link} to="/">Plants Store</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbar-nav" />
//           <Navbar.Collapse id="navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to="/">Home</Nav.Link>
//               <Nav.Link as={Link} to="/products">Products</Nav.Link>
//               <Nav.Link as={Link} to="/about">About Us</Nav.Link>
//               <Nav.Link as={Link} to="/Checkout">
//                 <span>
//                   ${totalPrice.toFixed(2)} <i className="bi bi-cart2"></i>
//                   {cartItems.length > 0 && <span>({cartItems.length})</span>}
//                 </span>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <div className="header-content">
//         <h3>Best Quality Plants</h3>
//         <h1>Amazing Variety Of Plants Starting Just $12</h1>
//         <button className="shop-now-button">SHOP NOW</button>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Container, Navbar, Nav } from 'react-bootstrap';
// import '../assets/css/Header.css'; 
// const Header = () => {
//   const cartItems = useSelector((state) => state.cartItems);

//   const totalPrice = cartItems && Array.isArray(cartItems)
//     ? cartItems.reduce((total, item) => total + parseFloat(item.price), 0)
//     : 0;

//   return (
//     <header className="contact-background-image"> 
//       <Navbar expand="lg" variant="dark" style={{ position: 'relative', zIndex: 2 }}> 
//         <Container className='container'>
//           <Navbar.Brand as={Link} to="/">Plants Store</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbar-nav" />
//           <Navbar.Collapse id="navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to="/">Home</Nav.Link>
//               <Nav.Link as={Link} to="/products">Products</Nav.Link>
//               <Nav.Link as={Link} to="/about">About Us</Nav.Link>
//               <Nav.Link as={Link} to="/Checkout">
//                 <span>
//                   ${totalPrice.toFixed(2)} <i className="bi bi-cart2"></i>
//                   {cartItems.length > 0 && <span>({cartItems.length})</span>}
//                 </span>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <div className="header-content">
//         <h3>Best Quality Plants</h3>
//         <h1>Amazing Variety Of Plants Starting Just $12</h1>
//         <button className="shop-now-button">SHOP NOW</button>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../assets/css/Header.css';

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);

  const totalPrice = cartItems && Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + parseFloat(item.price), 0)
    : 0;

  return (
    <header className="contact-background-image"> 
      <Navbar expand="lg" variant="dark" style={{ position: 'relative', zIndex: 2 }}> 
        <Container className="header-container">
          <Navbar.Brand as={Link} to="/">Plants Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/Checkout">
                <span>
                  ${totalPrice.toFixed(2)} <i className="bi bi-cart2"></i>
                  {cartItems.length > 0 && <span>({cartItems.length})</span>}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="header-content">
        <h3>Best Quality Plants</h3>
        <h1>Amazing Variety Of Plants Starting Just $12</h1>
        <button className="shop-now-button">SHOP NOW</button>
      </div>
    </header>
  );
};

export default Header;
