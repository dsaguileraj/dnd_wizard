import React from "react";
import Button from "@components/common/Button";

interface FormProps {
  header: string;
  children: React.ReactNode;
  className?: string;
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({
  header,
  children,
  className,
  onSubmit,
}) => {
  return (
    <>
      <h1>{header}</h1>
      <form className={className} onSubmit={onSubmit}>
        {children}
        <Button />
      </form>
    </>
  );
};

export default Form;
