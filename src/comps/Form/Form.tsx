import type { FormEventHandler } from "react";
import styles from "./Form.module.css";

type FormProps = {
  // The form onSubmit handler
  submitHandler?: FormEventHandler<HTMLFormElement>;
  // The child elements of the component, i.e. the form controls.
  children: React.ReactNode;
  // Submit button text
  submitBtnText?: string;
  // Does the form have a submit btn?
  hasSubmit: boolean;
};

export default function Form({ submitHandler, children, submitBtnText, hasSubmit }: FormProps) {
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

      {hasSubmit && (
        <button className={styles.submitBtn} type="submit">
          {submitBtnText || "Submit"}
        </button>
      )}
    </form>
  );
}
