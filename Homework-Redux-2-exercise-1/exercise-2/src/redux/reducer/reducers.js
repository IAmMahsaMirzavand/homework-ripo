import { CARDS } from "../actions/actionType";

const initialState = {

    type: '' ,
    name : '',
    stars : 0,
    price : 0,
    src : '',
    

}
export const reducer = (state = initialState,action) => {

if(action.type === CARDS) {

    return {

        ...state , 
        
type : action.paylod.type,
name : action.payload.name,
stars : action.payload.stars,
price : action.payload.price,
src : action.payload.src,       
    }
}

return state;
}