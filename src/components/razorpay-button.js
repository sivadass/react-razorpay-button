import React from "react";

class RazorpayButton extends React.Component {
  
  // Submit payment on click
  handleClick = (params) => {
    this.props.razorPaySubmit(params);
  }
  
  render() {
    return (
      <div className={"razorpay-button-wrapper"+" "+this.props.className}>
        <button style={{width: "100%", background: "#f5f5f5", borderRadius: "4px"}} onClick={this.handleClick}>Checkout with Razorpay</button>
      </div>
    );
  }
}

export default RazorpayButton;
