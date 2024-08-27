import React from "react";
import Button from "@components/common/Button";

interface FormProps {
  header: string;
  children: React.ReactNode;
  onSubmit?: () => void;
}

const Form: React.FC<FormProps> = ({ header, children, onSubmit }) => {
  return (
    <>
      <h1>{header}</h1>
      <form onSubmit={onSubmit}>
        {children}
        <Button />
      </form>
    </>
  );
};

export default Form;
