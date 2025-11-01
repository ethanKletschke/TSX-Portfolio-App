import { useRef } from "react";
import styles from "./Dialogs.module.css";

type ConfirmBoxProps = { 
  children: string; // Body text
};

export default function ConfirmBox({ children }: ConfirmBoxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  // Open dialog
  const openDialog = () => {
    // Open the dialog as a modal.
    dialogRef.current?.showModal();

    // Set focus on the confirm button
    confirmBtnRef.current?.focus();
  };

  // Confirm button click
  const handleConfirm = () => {
    // Close the dialog with the return value "Confirmed"
    dialogRef.current?.close("Confirmed");
    // Displays an alert to show the user that something happened
    alert("Confirmed!");
    // Log the return value ("Confirmed").
    console.debug(dialogRef.current?.returnValue);
  };

  // Decline button click handler
  const handleDecline = () => {
    // Close the dialog with the return value "Denied"
    dialogRef.current?.close("Denied");
    // Displays an alert to show the user that something happened
    alert(dialogRef.current?.returnValue + "!");
    // Log the return value ("Denied").
    console.debug(dialogRef.current?.returnValue);
  }

  const handleClose = () => {
    // Focus on the "open dialog" button when closing the dialog.
    openBtnRef.current?.focus();
  };

  return (
    <div className={styles.dialogDiv}>
      <h2>Confirm Box</h2>

      <button
        aria-label="Open Confirmation Dialog"
        onClick={openDialog}
        ref={openBtnRef}
      >
        Open Confirm Modal
      </button>

      <dialog 
        aria-modal="true"
        className={styles.confirmBox}
        onClose={handleClose}
        ref={dialogRef}
      >
        <h3>Confirmation</h3>

        <hr />

        <p>
          {children}
        </p>

        <button
          onClick={handleConfirm}
          ref={confirmBtnRef}
        >
          Yes
        </button>
        <button
          onClick={handleDecline}
        >
          No
        </button>
      </dialog>
    </div>
  );
}
