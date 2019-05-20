export const userDetails = (state={user:{},errorMsg:{},location:""},action) =>{
    switch(action.type){
      case 'USER_LOGIN':
      return { ...state, user: action.userDetail };
      break;
      case 'LOGIN_ERROR':

      return{ ...state, errorMsg: action.errorMsg };
      break;
      case 'LOGOUT':
      return state={user:{},errorMsg:{}};
      break;
      case 'LOCATION':
      return { ...state, location: action.city };
      break;
      default:
      return state;
    }
}