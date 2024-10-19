// src/components/Main.js
import React from 'react';
import  {useDispatch,useSelector} from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { cards } from './redux/actions/actionCreators';

const MainStyle = () => {

const dispatch = useDispatch()
// const data = useSelector((state) => state.src)
function handleCards() {
  
  dispatch(cards(data.name))
}

  return (
    <Container>
      <h2 className="my-4">Our Plants</h2>
      <Row>
        {  <Col md={4}>
          <Card>
            <Card.Img variant="top" src={handleCards} />
            <Card.Body>
              <Card.Title>{handleCards}</Card.Title>
              <Card.Text>
                This is a brief description of plant 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> }
         {/* <Col md={4}> */}
          {/* <Card>
            <Card.Img variant="top"src='material/hero-bg.jpg' />
            <Card.Body>
              <Card.Title>Plant 2</Card.Title>
              <Card.Text>
                This is a brief description of plant 2.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
        {/* <Col md={4}> */}
          {/* <Card>
            <Card.Img variant="top" src='material/hero-bg.jpg' />
            <Card.Body>
              <Card.Title>Plant 3</Card.Title>
              <Card.Text>
                This is a brief description of plant 3.
              </Card.Text>
            </Card.Body>
          </Card> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
};

export default MainStyle;
