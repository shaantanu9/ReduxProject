import { createStore } from 'redux';

const initData = {
  products: [],
  cart: [ ],
  total: 0
};

const reducer = (state = initData, action) => {

// if(action.type==''){

// return{
// ...state,
// cart:[...state.cart,action.payload]

// }
// }
  return state;
};

const store = createStore(reducer);

export default store;