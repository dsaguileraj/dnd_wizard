import React from "react";
import { TextAreaProps } from "@core/interfaces/inputs";

const InputText: React.FC<TextAreaProps> = ({
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
}) => {
  return (
    <>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <textarea
        id={label.toLowerCase()}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setValue({ ...value, [event.target.name]: event.target.value });
        }}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      >
        {value}
      </textarea>
    </>
  );
};

export default InputText;
