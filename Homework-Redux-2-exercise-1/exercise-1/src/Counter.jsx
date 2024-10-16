import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/actions/actioncreators';

import Button from 'react-bootstrap/Button';
export default function Counter() {

    const count = useSelector((state) => state.count)
const dispatch = useDispatch()

// function handleclickIncrement() {
  
//    dispatch(increment()) 
// }

// function handleClickDescrement() {
    
//     dispatch(decrement())
// }

// function handleClickRest() {
  
// dispatch(reset())

// }
  return (
    <>
    {/* <div>
   
    <h1>Counter App with React and Redux</h1>
    <h2> Counter : {count} </h2>
    <button onClick={handleclickIncrement}>+</button>
    <button onClick={handleClickRest}>Rest</button>
    <button onClick={handleClickDescrement}>-</button>
    
    </div> */}

<div >

<h1>{count}</h1>
<div className="d-flex gap-2 mb-2">
<Button variant="info" onClick={() => dispatch(increment())}>Increment</Button>
<Button variant="info" onClick={() => dispatch(decrement())}>Decrement</Button>
<Button size='lg' variant="info" onClick={() => dispatch(reset())}>Reset</Button>

</div>
</div>


    </>
  )
}
