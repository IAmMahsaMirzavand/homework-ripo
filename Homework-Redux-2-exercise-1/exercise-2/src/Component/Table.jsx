import React from 'react'
import { useSelector } from 'react-redux'
// import Total from './Total'
import { getTotal } from '../redux/reducer/reducers';

export default function Table() {

    const cartItems = useSelector((state) => state.cartItems)

    const totalAmount = getTotal(cartItems).toFixed(2);
  return (
    <>
    
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>

<thead>

<tr>

<th>Plant List</th>
<th>Quantity</th>
<th>Price $</th>
<th>Stars</th>
    
</tr>

</thead>

<tbody>

{cartItems.map((row,index) => (

  <tr key={index}>
    <th>{row.name}</th>
    <th>{row.length}</th>
    <th>{row.price}</th>
    <th>{row.stars}</th>
  </tr> 
  
))}
<tr>
    <th>Total</th>
    <th></th>
    <th>{cartItems.length === '0.00' ? 0 : totalAmount}</th>
</tr>
</tbody>
    </table>
    </>
  )
}
