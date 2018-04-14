import React from "react";
import { render } from "react-dom";

// Styles
import "./stylesheets/style.css";
import RazorpayButton from "./components/razorpay-button";

// Component
const App = props => {
  return <RazorpayButton />;
};

// Render
render(<App />, document.getElementById("root"));
