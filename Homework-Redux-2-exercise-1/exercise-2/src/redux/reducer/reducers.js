import { CARTS, ADD_CARTS, REMOVE_CARTS } from "../actions/actionType";



const initialState = {

plants : [] ,
cartItems : [] ,
}

export const getTotal = (cart) => {
  
  if (cart && Array.isArray(cart)) {
    return cart.reduce((amount, item) => amount + parseInt(item.price), 0);
  } else {
    
    return 0; 
  }
};

// export const getTotal = (cart) => {

//   return cart.reduce((amount , item) =>  amount + parseInt( item.price ) , 0 );


// }

export const reducer = (state = initialState,action) => {

    switch (action.type) {
        case  CARTS:
            
        return {

            ...state , 
            
        plants : action.payload ,
        }
        case  ADD_CARTS:
            
        return {

            ...state , 
            
        cartItems :[ ...state.cartItems , action.payload],
        }
    
        case REMOVE_CARTS:
            
           const index = state.cartItems.findIndex((item) => item.id === action.id)
            
            let newCart = [...state.cartItems]

            if(index >= 0) {

              newCart.splice(index,1)
            }

            else{

              console.warn('fxx code')
            }
            return {

              ...state ,

              cartItems : newCart
            }
          
        

    
        default:

           return state;
}


}







