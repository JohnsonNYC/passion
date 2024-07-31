import React from "react";

const Button = ({ color, children }) => {
  return <button className={`ps-button ps-button-${color}`}>{children}</button>;
};

export default Button;
