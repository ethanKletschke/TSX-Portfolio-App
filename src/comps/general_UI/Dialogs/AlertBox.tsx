import type { ReactNode } from "react";
import { useRef } from "react";
import { useToast } from "../../../systems/toast/toast.context";
import styles from "./Dialogs.module.css";

type AlertBoxProps = {
  children: ReactNode;
  alertTitle?: string;
};

export default function AlertBox({ children, alertTitle }: AlertBoxProps) {
  // The ref for the dialog box.
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const okayBtnRef = useRef<HTMLButtonElement>(null);
  
  // Used to generate a toast.
  const { addToast } = useToast();

  const openAlert = () => {
    // Show the dialog as a modal
    dialogRef.current?.showModal();
    
    // Focus on the "OK" button when the modal opens
    okayBtnRef.current?.focus();
  };
  
  const closeAlert = () => {
    // Close the alert modal
    dialogRef.current?.close();

    // Focus on the "Open Alert Box" button when the alert closes
    openBtnRef.current?.focus();

    // Display a toast to show that something did happen when clicking "OK"
    addToast("Confirmed!", { variant: "info" });
  };

  return (
    <section className={styles.dialogDiv}>
      {/* Heading for alert box section */}
      <h2>Alert Box</h2>

      <button onClick={openAlert} ref={openBtnRef}>
        Open Alert Box
      </button>

      <dialog className={styles.alertBox} ref={dialogRef}>
        {/* Conditionally rendered heading and horizontal rule */}
        {alertTitle && (
          <>
            <h3>{alertTitle}</h3>
            <hr />
          </>
        )}

        {children}

        <button onClick={closeAlert} ref={okayBtnRef}>
          OK
        </button>
      </dialog>
    </section>
  );
}
