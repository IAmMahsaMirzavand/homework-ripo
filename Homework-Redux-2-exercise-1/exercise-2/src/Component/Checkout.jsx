import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { removeCarts } from '../redux/actions/actionCreators';
import Table from './Table';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from './ModalComponent';
import ModalComponent from './ModalComponent';

export default function Ckeckout() {
  const cartItems = useSelector((state) => state.cartItems)

 
  const dispatch = useDispatch()
  return (
    <div>
      <div><Table/></div>
      <div>{cartItems.map(plant => {

        return (

          <div>
            <img src={plant.src} alt="" />
            <h4>{plant.name}</h4>
            <p>{plant.price}</p>
            {/* <button onClick={() => dispatch(removeCarts(plant.id))}>Remove</button> */}
            <ModalComponent/>

          </div>
        )
      })}</div>  
      
<div>
  {/* <h2><Total/></h2> */}
</div>
    </div>
  )
}


