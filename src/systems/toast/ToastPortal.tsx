import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type ToastPortalProps = {
  children: ReactNode; // The toasts
};

export default function ToastPortal({ children }: ToastPortalProps) {
  // Get the toast portal root from index.html
  const toastRoot = document.getElementById("toast-root");

  // If the toast root doesn't exist
  if (!toastRoot) {
    return null; // Do not create the portal.
  }

  // Create the toast portal.
  return createPortal(children, toastRoot);
}
