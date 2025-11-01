import { useRef, useState } from "react";
import styles from "./Dialogs.module.css";

export default function FormBox() {
  // States
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  // Dialog element Ref
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
    console.debug("Form dialog opened.");
  };

  const closeFormDialog = () => {
    // Set the return value of the dialog and close it
    dialogRef.current?.close("Form dialog closed.");
    // Log the return value.
    console.debug(dialogRef.current?.returnValue);
  };

  const handleSubmit = () => {
    // No preventDefault() was used. This allows the dialog to close on submit.
    // Alert the user on submit
    window.alert(`Feedback Submitted!\nName: ${fname} ${lname}\nEmail: ${email || "Not Specified"}`);

    // Reset the values to clear the inputs when the form is submitted
    setFname("");
    setLname("");
    setEmail("");
    setFeedback("");

    console.debug(`First name: ${fname}`);
    console.debug(`Last name: ${lname}`);
    console.debug(`Email: ${email || "[nothing]"}`);
    console.debug(`Feedback: ${feedback}`);
  };

  return (
    <div className={styles.dialogDiv}>
      <h2>Form Box</h2>

      {/* Button to open the modal */}
      <button
        aria-label="Open feedback form dialog"
        onClick={openDialog}
        role="button"
        type="button"
      >
        Open Form Dialog
      </button>

      {/* Form Dialog Box */}
      <dialog
        aria-modal="true"
        className={styles.formBox}
        onClose={closeFormDialog}
        ref={dialogRef}
      >
        <h3>Feedback</h3>

        <hr />

        <form
          method="dialog" // Dialog closes on submit
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend>Personal Details</legend>

            {/* Input for the user's first name */}
            <label htmlFor="fname">First Name</label>
            <input
              id="fname"
              name="fname"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFname(e.target.value)}
              placeholder="First name..."
              required
              type="text"
              value={fname || ""}
            />

            {/* Input for the last name */}
            <label htmlFor="lname">Last Name</label>
            <input
              id="lname"
              name="lname"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLname(e.target.value)}
              placeholder="Last name..."
              required
              type="text"
              value={lname || ""}
            />

            {/* Email input */}
            <label htmlFor="email">Email Address (optional)</label>
            <input
              id="email"
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Email..."
              type="email"
              value={email || ""}
            />

            {/* Feedback textarea */}
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFeedback(e.target.value)}
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
        </form>
      </dialog>
    </div>
  );
}
