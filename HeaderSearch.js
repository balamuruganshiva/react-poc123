import React from 'react';
import {connect} from 'react-redux';
import {Logout, setLocation} from './action/admin';

const mapStateToProps = (state) =>{
  console.log(state);
  return {
    user :  state.userDetails.user
  }
}
const mapDispatchToProps = (dispatch) =>{
   return {
      Logout: () => dispatch(Logout()),
      setLocation: (city) => dispatch(setLocation(city))
   }
}

class HeaderSearch extends React.Component {

 logout(){
    localStorage.setItem('uname','');
    localStorage.setItem('pwd','');
    this.props.Logout();
    this.props.history.push('/');
  }
locationSave(city){
  this.props.setLocation(city);
}
componentDidMount(){
  if(!this.props.user.logged){
     this.props.history.push('/');
  }
}
render(){
  return(
        <div className="Search">
            <div className="homeHeader">
            <div className="logo">Infy Movies</div>
               {this.props.user.logged && <div>
             <div className="cityRight"><select onChange={(e)=>this.locationSave(e.target.value)}>
             <option value="">Select City</option>
             <option value="Chennai">Chennai</option>
             <option value="Bangalore">Bangalore</option>
             <option value="Mangalore">Mangalore</option>
             </select></div>
             <div className="logout"><button onClick={()=>this.logout()}>Logout</button></div>
             <div className="userright">Welcome <span className="username">{this.props.user.userName}</span></div>
             </div>}
             </div>
          </div>
             );
}}
export default  connect(mapStateToProps,mapDispatchToProps)(HeaderSearch);