import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/actions/actioncreators';
export default function Counter() {

    const count = useSelector((state) => state.count)
const dispatch = useDispatch()

function handleclickIncrement() {
  
   dispatch(increment()) 
}

function handleClickDescrement() {
    
    dispatch(decrement())
}

function handleClickRest() {
  
dispatch(reset())

}
  return (
    <>
    <div>
   
    <h1>Counter App with React and Redux</h1>
    <h2> Counter : {count} </h2>
    <button onClick={handleclickIncrement}>+</button>
    <button onClick={handleClickRest}>Rest</button>
    <button onClick={handleClickDescrement}>-</button>
    
    </div>


{/* <div>
               <h1>Counter: {count}</h1>
               <button onClick={() => dispatch(increment())}>Increment</button>
               <button onClick={() => dispatch(decrement())}>Decrement</button>
               <button onClick={() => dispatch(reset())}>Reset</button>
           </div> */}
    </>
  )
}
