import type { FormEventHandler } from "react";
import styles from "./Form.module.css";

type FormProps = {
  // The form onSubmit handler
  submitHandler?: FormEventHandler<HTMLFormElement>;
  // The child elements of the component, i.e. the form controls.
  children: React.ReactNode;
  dialog?: boolean; // Is the form in a dialog?
};

export default function Form({ submitHandler, children, dialog }: FormProps) {
  // Default form submit handler if one isn't supplied
  const defaultHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  return (
    <form 
      autoComplete="off"
      className={styles.form}
      method={(dialog) ? "dialog" : "get"}
      onSubmit={submitHandler || defaultHandleSubmit}
    >
      {/* Form controls, i.e., input elements */}
      {children}
    </form>
  );
}
