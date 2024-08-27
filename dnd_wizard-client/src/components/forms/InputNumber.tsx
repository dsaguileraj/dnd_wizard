import React from "react";
import { InputNumberProps } from "@core/interfaces/inputs";

const InputNumber: React.FC<InputNumberProps> = ({
  label,
  value,
  setValue,
  className,
  disabled,
  readOnly,
  required,
  min,
  max,
  step,
}) => {
  return (
    <>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type="number"
        id={label.toLowerCase()}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue({ ...value, [event.target.name]: event.target.value });
        }}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        min={min}
        max={max}
        step={step}
      />
    </>
  );
};

export default InputNumber;
