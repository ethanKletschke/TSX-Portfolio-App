import { createContext, useContext } from "react";
import type { ToastObj, ToastOptions } from "./toast.types";

// Defines the toast context value for useContext()
export interface ToastContextValue {
  addToast: (message: string, options?: ToastOptions) => void;
  removeToast: (id: string) => void;
  toasts: ToastObj[];
}

// Create a context for the toasts
export const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  // Create a toast context value with useContext()
  const ctx = useContext(ToastContext);
  
  // If the context does not exist
  if (!ctx) {
    // Throw an error, as the context was not used in a context provider.
    throw new Error("useToast must be used inside a ToastProvider.");
  }

  // Return the created toast context
  return ctx;
}
