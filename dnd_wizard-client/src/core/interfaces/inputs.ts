import React from "react";

interface BaseProps {
  label: string;
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
}

export interface InputCheckProps extends BaseProps {
  checked?: boolean;
}

export interface InputNumberProps extends BaseProps {
  min?: number;
  max?: number;
  step?: number;
}

export interface SelectProps extends BaseProps {
  options: any[];
  multiple?: boolean;
  size?: number;
}

export interface InputTextProps extends TextAreaProps {
  size?: number;
}

export interface TextAreaProps extends BaseProps {
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
}
