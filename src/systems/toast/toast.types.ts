// Types of toasts (default = normal styling)
export type ToastVariant = "default" | "success" | "info" | "warning" | "error";

// Options for displaying the toast
export interface ToastOptions {
  variant?: ToastVariant;
  duration?: number; // Milliseconds
}

// Represents a toast.
export interface ToastObj {
  id: string;
  message: string;
  variant: ToastVariant;
  duration: number;
}
