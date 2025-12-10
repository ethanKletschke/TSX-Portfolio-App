import { createContext, useContext } from "react";
import type { ToastObj, ToastOptions } from "./toast.types";

export interface ToastContextValue {
  addToast: (message: string, options?: ToastOptions) => void;
  removeToast: (id: string) => void;
  toasts: ToastObj[];
}

export const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  // Create a toast context value
  const ctx = useContext(ToastContext);
  
  // If the context does not exist
  if (!ctx) {
    // Throw an error, as the context was not used in a context provider.
    throw new Error("useToast must be used inside a ToastProvider.");
  }

  return ctx;
}
