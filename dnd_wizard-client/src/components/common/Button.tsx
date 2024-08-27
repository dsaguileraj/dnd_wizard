import React from "react";

interface ButtonProps {
  label?: string;
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label = "Submit",
  type = "submit",
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
