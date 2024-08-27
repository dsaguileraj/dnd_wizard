import React from "react";
import { InputCheckProps } from "@core/interfaces/inputs";

const InputCheck: React.FC<InputCheckProps> = ({
  label,
  value,
  setValue,
  className,
  disabled,
  required,
  checked,
}) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type="checkbox"
        id={label.toLowerCase()}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue({ ...value, [event.target.name]: event.target.checked });
        }}
        className={className}
        disabled={disabled}
        required={required}
        checked={checked}
      />
    </>
  );
};

export default InputCheck;
