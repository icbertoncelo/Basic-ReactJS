import React from "react";

function Button({ children, background, ...rest }) {
  return (
    <button
      style={{
        background,
        border: "none",
        borderRadius: 4,
      }}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
