import React from "react";

class RazorpayButton extends React.Component {
  
  // Submit payment on click
  handleClick = (params) => {
    this.props.razorPaySubmit(params);
  }
  
  render() {
    return (
      <div className="razorpay-button-wrapper">
        <button onClick={this.handleClick}>Checkout with Razorpay</button>
      </div>
    );
  }
}

export default RazorpayButton;
