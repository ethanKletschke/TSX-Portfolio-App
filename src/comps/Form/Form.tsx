import type { FormEventHandler } from "react";
import styles from "./Form.module.css";

type FormProps = {
  // The form onSubmit handler
  submitHandler?: FormEventHandler<HTMLFormElement>;
  // The child elements of the component, i.e. the form controls.
  children: React.ReactNode;
  // Submit button text
  submitBtnText?: string;
};

export default function Form({ submitHandler, children, submitBtnText }: FormProps) {
  // Default form submit handler if one isn't supplied
  const defaultHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  return (
    <form 
      className={styles.form}
      onSubmit={submitHandler || defaultHandleSubmit}
    >
      {/* Form controls, i.e., input elements */}
      {children}

      <button className={styles.submitBtn} type="submit">
        {submitBtnText || "Submit"}
      </button>
    </form>
  );
}
