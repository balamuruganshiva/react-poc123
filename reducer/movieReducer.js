export const movieDetails = (state={movie:{}},action) =>{
    switch(action.type){
      case 'ADD_MOVIE':
      return { ...state, movie: action.movie };
      break;
      break;
      default:
      return state;
    }
}