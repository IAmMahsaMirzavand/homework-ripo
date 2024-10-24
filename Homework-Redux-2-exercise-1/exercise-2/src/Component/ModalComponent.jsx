import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import CloseButton from 'react-bootstrap/CloseButton'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeCarts } from '../redux/actions/actionCreators';
// import '../assets/css/Header.css';
// import  {button } from 'react-bootstrap-icons';

function ModalComponent() {

  const cartItems = useSelector((state) => state.cartItems)
  const dispatch  = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
function handleCloseButton() {

  dispatch(removeCarts(cartItems.id));
  setShow(!show);
}

  return (
    <>
      
  
      {/* <CloseButton  className="rotate-btn" onClick={handleShow} /> */}
      <button onClick={handleShow} type="button" className="rotate-btn" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You will delete the plant from basket shop!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleCloseButton}>
            DELETE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;


