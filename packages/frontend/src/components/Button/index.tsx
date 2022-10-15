import React from "react";

type ButtonProps = {
  type: "primary" | 'secondary' | 'acccent'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <button>
      {children}
    </button>
  );
}

export default React.memo(Button)
