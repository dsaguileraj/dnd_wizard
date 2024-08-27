import React from "react";
import { SelectProps } from "@core/interfaces/inputs";

const Select: React.FC<SelectProps> = ({
  label,
  value,
  setValue,
  className,
  disabled,
  required,
  options,
  multiple,
  size,
}) => {
  let count = 0;
  return (
    <>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <select
        id={label.toLowerCase()}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          setValue({ ...value, [event.target.name]: event.target.value });
        }}
        className={className}
        disabled={disabled}
        required={required}
        multiple={multiple}
        size={size}
      >
        {options.map((option) => (
          <option key={count++} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
