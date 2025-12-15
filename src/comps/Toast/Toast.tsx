import clsx from "clsx";
import type { ToastVariant } from "../../systems/toast/toast.types";
import styles from "./Toast.module.css";

type ToastProps = {
  message: string; // toast text
  variant: ToastVariant; // Used to determine styling
};

export default function Toast({ message, variant }: ToastProps) {
  return (
    <div className={clsx(styles.toast, styles[variant])}>
      {/* Toast message */}
      {message}
    </div>
  );
}
