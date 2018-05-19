import React from "react";

class RazorpayButton extends React.Component {
  // Submit payment on click
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  componentDidMount() {
    this.startRazorPay();
  }

  startRazorPay() {
    let options = {
      key: "YOUR_KEY_ID",
      amount: "2000", // 2000 paise = INR 20
      name: "Merchant Name",
      description: "Purchase Description",
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png",
      handler: function(response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Harshil Mathur",
        email: "harshil@razorpay.com"
      },
      notes: {
        address: "Hello World"
      },
      theme: {
        color: "#F37254"
      }
    };
    let razorPay = new Razorpay(options);
    return razorPay;
  }
  handleClick(e) {
    razorPay.open();
    e.preventDefault();
  }

  render() {
    return (
      <div className={"razorpay-button-wrapper" + " " + this.props.className}>
        <button
          className="razorpay-button"
          style={{ width: "100%", background: "#f5f5f5", borderRadius: "4px" }}
          onClick={this.handleClick}
        >
          <img src="logo.png" /> Checkout with Razorpay
        </button>
      </div>
    );
  }
}

export default RazorpayButton;
