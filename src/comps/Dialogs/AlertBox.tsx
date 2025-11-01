import { useRef } from "react";
import styles from "./Dialogs.module.css";

type AlertBoxProps = {
  children: React.ReactNode;
  alertTitle?: string;
};

export default function AlertBox({ children, alertTitle }: AlertBoxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div className={styles.dialogDiv}>
      <h2>Alert Box</h2>

      <button
        onClick={openDialog}
      >
        Open Alert Box
      </button>

      <dialog
        className={styles.alertBox}
        ref={dialogRef}
        
      >
        {alertTitle && (
          <>
            <h3>{alertTitle}</h3>
            <hr />
          </>
        )}

        {children}

        <button
          onClick={() => dialogRef.current?.close()}
        >
          OK
        </button>
      </dialog>
    </div>
  );
}
