export const orderDetails = (state={order:{}},action) =>{
    switch(action.type){
      case 'ORDER':
      return  {...state,
        order: action.order};
      break;
      default:
      return state;
    }
}