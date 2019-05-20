import React from 'react';

import {addToCart} from './action/cart';
import {connect} from 'react-redux';
const mapDispatchToProps = (dispatch) =>{
   return {
      addToCart: (cart) => dispatch(addToCart(cart))
   }
}

const mapStateToProps = (state) =>{
  return {
    cartDetails : state.preCartDetails.preCart
  }
}

class BookingList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      "selected_theater" : ""
    }
    this.date = React.createRef();
    this.time = React.createRef();
    this.seats = React.createRef();
  }
  selectTheater(theater){
    this.setState({
      "selected_theater" : theater
    });
  }
  proceed(){
    let cart=this.props.data;
    cart.date = this.date.current.value;
    cart.time = this.time.current.value;
    cart.seats = this.seats.current.value;
    cart.selected_theater = this.state.selected_theater;
    cart.total = (parseInt(this.seats.current.value)*cart.price);
    this.props.addToCart(cart);
    this.props.history.push('/summary');
  }
  render(){
      return(
    <div className="BookingDetails">
          <div className="movieHeader">Booking Details</div><br/>
          <div className="moviebody">
            <div className="select_your_theater">
             <b>Select Your Theater</b>
            </div>
            <div>
              {this.props.data.theater && this.props.data.theater.map(theater =>{
                return(<div key={theater}><input type="radio" onClick={()=>this.selectTheater(theater)} />{theater}</div>)
              })}
            </div><br/>
            {this.state.selected_theater && <div>
            <div className="date">
                <b>Selected Theater</b> : <span>{this.state.selected_theater}</span><br/>
            </div>
            <div className="date">
                <b>Date</b><br/>
                <select ref={this.date}>
                <option value="Select Date">Select Date</option>
                <option value="05/15/2019">05/15/2019</option>
                <option value="05/16/2019">05/16/2019</option>
                <option value="05/17/2019">05/17/2019</option>
                </select>
            </div><br/>
            <div className="date">
                <b>Time</b><br/>
                <select ref={this.time}>
                <option value="Select Time">Select Time</option>
                <option value="10 A.M">10 A.M</option>
                <option value="2 P.M">2 P.M</option>
                <option value="6 P.M">6 P.M</option>
                <option value="9 P.M">9 P.M</option>
                </select>
            </div><br/>
            <div className="Seats">
             <b>No Of Seats (2-10)</b><br/>
             <input type="text"  ref={this.seats}/>
            </div>
            <div className="proceed">
              <button onClick={()=>this.proceed()}>Proceed</button>
            </div>
            </div>}
          </div>
    </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookingList);