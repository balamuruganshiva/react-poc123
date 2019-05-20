import React from 'react';
import {userLogin} from './action/admin';
import {connect} from 'react-redux';
import {movieDetails} from './action/movie';

const mapDispatchToProps = (dispatch) =>{
   return {
      userLogin: () => dispatch(userLogin()),
      movieDetails: () => dispatch(movieDetails())
   }
}
const mapStateToProps = (state) =>{
  console.log(state);
  return {
    errorMsg : state.userDetails.errorMsg,
    user : state.userDetails.user
  }
}
class Login extends React.Component{

  constructor(props){
    super(props);
    this.uname = React.createRef();
    this.pwd = React.createRef();
  }
  submitUser(){
    //console.log(movie);
    const userName = this.uname.current.value;
    const pwd = this.pwd.current.value;
    localStorage.setItem('uname',userName);
    localStorage.setItem('pwd',pwd);
    this.props.userLogin();
  }
  componentDidUpdate(nextProps,nextState){
    if(nextProps.user.logged !== this.props.user.logged){
      if(this.props.user.logged){
        this.props.movieDetails();
        this.props.history.push('/home');
      }else{
        this.props.history.push('/');
      }
    }
  }
  render(){
    return(
    <div>
    {this.props.errorMsg && this.props.errorMsg.msg && <div className="ErrorMsg">{this.props.errorMsg.msg}</div>}
       <div className="BookingDetails BookingSummary">
       <div className="movieHeader">Login</div>
       <div className="loginCont">
       <p>InfyMovie is an online application where you can tickets for your favourite movie. Please login to the application to grab your movie ticket.</p>
       <div>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" ref={this.uname}/></div>

       <div>Password : <input type="password" ref={this.pwd} /></div>

       <div><button className="Login" onClick={()=>this.submitUser()}>Login</button></div> 
       </div>
      </div>
    </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);