
// import React, { useEffect, useState } from 'react';
// import  {useDispatch,useSelector} from 'react-redux';
// import { Container, Row, Col, Card, Button ,Navbar, Nav } from 'react-bootstrap';
// import {carts, addCarts } from '../redux/actions/actionCreators';


// const MainStyle = () => {
 

// const dispatch = useDispatch()
// const plants = useSelector((state) => state.plants); 



//   useEffect(() => {

//     dispatch(carts())

//   },)
  


// return (
//   <>


// {/* <header  className='contact-background-image'>
        

//         <Navbar  expand="lg">
//           <Container >
//             <Navbar.Brand href="#home" >Plants Store</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbar-nav" />
//             <Navbar.Collapse id="navbar-nav" style={{marginLeft:'700px'}}>
//               <Nav className="me-auto">
//                 <Nav.Link href="#home">Home</Nav.Link>
//                 <Nav.Link href="#products">Products</Nav.Link>
//                 <Nav.Link href="#about">About</Nav.Link>
//                 <Nav.Link href="#contact"><i onClick={addCart} className="bi bi-cart2"></i> Contact</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar> */}
        
//        <h3>Best Qua;ity Plants</h3>
//        <h1>Amazing Variety
//     Of Plants Starting
//     Just $12</h1>
//     <button>SHOP NOW</button>
    
//         {/* </header> */}
       


//   <Container> 
//       <h2 className="my-4">Our Plants</h2> 
//       <Row>
//           {plants.map((plant,index) => (
//               <Col md={4} key={index}>
//                   <Card> 
//                       <Card.Img variant="top" src={plant.src} /> 
//                       <Card.Body> 
//                       <Card.Text> 
//                             {plant.name}
//                           </Card.Text> 
//                           <Card.Title>{plant.type}</Card.Title> 
//                           <Button onClick={() => dispatch(addCarts())}>shopping</Button>
//                       </Card.Body> 
//                   </Card> 
//               </Col>
//           ))} 
//       </Row> 
//   </Container>

//   </>
// ); 
// };

// export default MainStyle;





import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { carts, addCarts } from '../redux/actions/actionCreators';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from '@mui/material/Rating';
const MainStyle = () => {
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.plants);
  // const [toasts, setToasts] = useState([]);
  
  const toastMessage = () => {
    toast.success('Plant added to basket shop!', {
      position: 'bottom-left'
    });
  }
  function handleAddCards(plant) {

    dispatch(addCarts(plant))
    toastMessage();
    
//     const newToast = {
// id : Date.now(),
// message: `Product added to cart!`,

//     }


//     setToasts((prevToasts) => [...prevToasts, newToast]);

    
//     setTimeout(() => {
//       setToasts((prevToasts) =>
//         prevToasts.filter(toast => toast.id !== newToast.id)
//       );
//     }, 3000);
    
  }


  useEffect(() => {
    dispatch(carts());
  }, []);


  return (
    <>
      <Container>
        <h2 className="my-4">Our Plants</h2>
        <Row>
          {plants.map((plant, index) => (
            <Col md={4} key={index}>
               <div className="bag-container">
              <Card >
               
                <Card.Img variant="top" src={plant.src} />
                
                <i
        onClick={() => handleAddCards(plant)}
        className="bi bi-bag-plus-fill add-to-cart-icon"
        title="Add to cart"
        aria-label="Add to cart"
      ></i>

                <Card.Body>
                  <Card.Text>{plant.name}</Card.Text>
                  <Card.Title>{plant.type}</Card.Title>
                  <Rating value={plant.stars} readOnly/>
                  {/* <Button onClick={() => dispatch(addCarts(plant))}></Button> */}
                </Card.Body>
               
              </Card>
             </div>
            </Col>
          ))}
        </Row>
      </Container>

      <ToastContainer />
{/* 
start
<ToastContainer position="bottom-start"  className="p-1">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            onClose={() => setToasts((prevToasts) => prevToasts.filter(t => t.id !== toast.id))}
>
            
            <Toast.Body>{toast.message}</Toast.Body>
          </Toast>
        ))}
      </ToastContainer> */}
    </>
  );
};

export default MainStyle;












