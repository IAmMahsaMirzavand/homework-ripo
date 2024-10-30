import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { carts, addCarts } from '../redux/actions/actionCreators';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from '@mui/material/Rating';


const MainStyle = () => {
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.plants);

  const toastMessage = () => {
    toast.success('Plant added to basket shop!', {
      position: 'bottom-left',
    });
  };

  function handleAddCards(plant) {
    dispatch(addCarts(plant));
    toastMessage();
  }

  useEffect(() => {
    dispatch(carts());
  }, [dispatch]);

  return (
    <>
      <Container className="mt-5 ">
        <Row className="g-4">
          {plants.map((plant, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <Card className="plant-card">
                <Card.Img variant="top" src={plant.src} />
                <i
                  onClick={() => handleAddCards(plant)}
                  className="bi bi-bag-plus-fill add-to-card"
                  title="Add to cart"
                  aria-label="Add to cart"
                ></i>
                <Card.Body className="cart-card">
                  <Card.Text>{plant.type}</Card.Text>
                  <Card.Title>{plant.name}</Card.Title>
                  <Rating value={plant.stars} readOnly />
                  {plant.offPrice ? (
                    <div className="price-container">
                      <span className="old-price">${plant.offPrice}</span>
                      <span className="discounted-price">${plant.price}</span>
                    </div>
                  ) : (
                    <div>
                      <span className="discounted-price">${plant.price}</span>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

export default MainStyle;
