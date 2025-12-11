import { useRef } from "react";
import { useToast } from "../../../systems/toast/toast.context";
import styles from "./Dialogs.module.css";

type ConfirmBoxProps = {
  children: string; // Body text
};

export default function ConfirmBox({ children }: ConfirmBoxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  const { addToast } = useToast();

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
    
    // Displays a toast to show the user that something happened
    addToast("Confirmed!", { variant: "success" })
    
    // Log the return value ("Confirmed").
    console.debug(dialogRef.current?.returnValue);
  };

  // Decline button click handler
  const handleDecline = () => {
    // Close the dialog with the return value "Denied"
    dialogRef.current?.close("Denied");

    // Displays a toast to show the user that something happened
    addToast("Declined!", { variant: "error" });
    
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
        Open Confirmation Modal
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
