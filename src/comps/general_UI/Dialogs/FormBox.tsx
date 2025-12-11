import { useRef, useState } from "react";
import Form from "../Form/Form";
import styles from "./Dialogs.module.css";

export default function FormBox() {
  // States
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  // Dialog element Ref
  const dialogRef = useRef<HTMLDialogElement>(null);
  // FirstName Input Ref
  const firstNameInputRef = useRef<HTMLInputElement>(null);

  // Opens the form dialog box
  const openDialog = () => {
    // Show the form dialog as a modal
    dialogRef.current?.showModal();

    // Focus on the firstName input.
    firstNameInputRef.current?.focus();
  };

  const closeFormDialog = () => {
    // Set the return value of the dialog and close it
    dialogRef.current?.close("Form dialog closed.");
  };

  // Sets the value of fname.
  const handleFnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFname(e.target.value);
  };
  
  // Sets the value of lname.
  const handleLnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLname(e.target.value);
  };

  // Sets the value of email.
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Sets the value of feedback.
  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    // No preventDefault() was used. This allows the dialog to close on submit.
    // Alert the user on submit
    window.alert(`Feedback Submitted!\nName: ${fname} ${lname}\nEmail: ${email || "Not specified"}`);

    // Reset the values to clear the inputs when the form is submitted
    setFname("");
    setLname("");
    setEmail("");
    setFeedback("");
  };

  return (
    <div className={styles.dialogDiv}>
      <h2>Form Box</h2>

      {/* Button to open the modal */}
      <button
        aria-label="Open feedback form dialog"
        onClick={openDialog}
        type="button"
      >
        Open Form Dialog
      </button>

      {/* Form Dialog Box */}
      <dialog
        className={styles.formBox}
        onClose={closeFormDialog}
        ref={dialogRef}
      >
        <h3>Feedback</h3>

        <hr />

        <Form
          dialog // Dialog closes on submit
          submitHandler={handleSubmit}
        >
          <fieldset>
            <legend>Personal Details</legend>

            {/* Input for the user's first name */}
            <label htmlFor="fname">First Name</label>
            <input
              id="fname"
              name="fname"
              onChange={handleFnameChange}
              placeholder="First name..."
              ref={firstNameInputRef}
              required
              type="text"
              value={fname || ""}
            />

            {/* Input for the last name */}
            <label htmlFor="lname">Last Name</label>
            <input
              id="lname"
              name="lname"
              onChange={handleLnameChange}
              placeholder="Last name..."
              required
              type="text"
              value={lname || ""}
            />

            {/* Email input */}
            <label htmlFor="email">Email Address (optional)</label>
            <input
              autoComplete="email"
              id="email"
              name="email"
              onChange={handleEmailChange}
              placeholder="Email..."
              type="email"
              value={email || ""}
            />

            {/* Feedback textarea */}
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              onChange={handleFeedbackChange}
              placeholder="Feedback..."
              required
              value={feedback || ""}
            />
          </fieldset>

          {/* Submit button */}
          <input type="submit" value="Submit" />

          {/* Cancel button */}
          <input
            onClick={() => dialogRef.current?.close("User cancelled the dialog")}
            type="button"
            value="Cancel"
          />
        </Form>
      </dialog>
    </div>
  );
}
