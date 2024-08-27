import React from "react";
import { InputTextProps } from "@core/interfaces/inputs";

const InputText: React.FC<InputTextProps> = ({
  label,
  value,
  setValue,
  className,
  disabled,
  readOnly,
  required,
  placeholder,
  minLength,
  maxLength,
  size,
}) => {
  return (
    <>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type="text"
        id={label.toLowerCase()}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue({ ...value, [event.target.name]: event.target.value });
        }}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        size={size}
      />
    </>
  );
};

export default InputText;
