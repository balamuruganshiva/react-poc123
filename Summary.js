import React from 'react';
import {connect} from 'react-redux';
import {confirmOrder} from './action/order';
const mapStateToProps = (state) =>{
  return {
    cart : state.cartDetails.cart,
    location :  state.userDetails.location
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    confirmOrder : (order) => dispatch(confirmOrder(order))
  }
}
class Summary extends React.Component {
  constructor(props){
    super(props);
  }
  modify(){
    this.props.history.push('/moviedetails');
  }
  confirm(){
    this.props.confirmOrder(this.props.cart);
    this.props.history.push('/checkout');
  }
  render(){
    const location = this.props.location?this.props.location:"";
     return(
    <div className="BookingDetails BookingSummary">
          <div className="movieHeader">Booking Summary</div><br/>
          <div className="selected_details">You have selected following details</div>
          <div className="summary_details">
            <div><b>Theater Name</b> : <span>{this.props.cart.selected_theater}</span></div>
            <div><b>Seats Booked</b> : <span>{this.props.cart.seats}</span></div>
            <div><b>Movie Name</b> : <span>{this.props.cart.movie_name}</span></div>
            <div><b>Price</b> : <span>Rs. {this.props.cart.total}</span></div>
            <div><b>Location</b> : <span>{location}</span></div>
            <div><b>Show Date</b> : <span>{this.props.cart.date}</span></div>
            <div><b>Show Time</b> : <span>{this.props.cart.time}</span></div>
            <div className="summary_action">
               <button onClick={()=>this.modify()}>Modify Booking</button>
               <button onClick={()=>this.confirm()}>Confirm Booking</button>
            </div>
          </div>
    </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Summary);