import clsx from "clsx";
import type { ToastVariant } from "../../systems/toast/toast.types";
import styles from "./Toast.module.css";

type ToastCompProps = {
  message: string; // toast text
  variant: ToastVariant; // Used to determine styling
};

export default function ToastComp({ message, variant }: ToastCompProps) {
  return (
    <div className={clsx(styles.toast, styles[variant])}>
      {message}
    </div>
  );
}
