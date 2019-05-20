export const preCartDetails = (state={preCart:{}},action) =>{
    switch(action.type){
      case 'PRE_CART':
      return  {...state,
        preCart: action.book};
      break;
      default:
      return state;
    }
}