import React from "react";

const Button = ({ children, ...props }) => (
  <button {...props} onTouchStart={() => {}}>
    {children}
  </button>
);
export default Button;
