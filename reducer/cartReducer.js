export const cartDetails = (state={cart:{}},action) =>{
    switch(action.type){
      case 'ADD_CART':
      return  {...state,
        cart: action.cart};
      break;
      default:
      return state;
    }
}