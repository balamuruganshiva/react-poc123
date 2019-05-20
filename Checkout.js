import React from 'react';
import {connect} from 'react-redux';
const mapStateToProps = (state) =>{
  return {
    order : state.orderDetails.order
  }
}

class Checkout extends React.Component {
  moreTickets(){
    this.props.history.push('/home');
  }
  render(){
    return( <div className="BookingDetails BookingSummary">
          <div className="movieHeader">Checkout Details</div>
          <div className="checkoutCnt">
           {this.props.order.total && 
            <div className="cont_text">
              Total Amount to be paid : RS {this.props.order.total}
            </div>
           }
            <div>
              Thanks for booking movie tickets online, Please pay and collect your tickets at Box OFFICE COUNTER!
            </div>
            <div><a onClick={()=>this.moreTickets()} className="book_more">Book More Tickets</a></div>
          </div>
          </div>)
  }
}
export default connect(mapStateToProps)(Checkout);