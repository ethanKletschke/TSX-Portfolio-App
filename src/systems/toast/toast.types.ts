export type ToastVariant = "default" | "success" | "info" | "warning" | "error";

export interface ToastOptions {
  variant?: ToastVariant;
  duration?: number; // Milliseconds
}

export interface ToastObj {
  id: string;
  message: string;
  variant: ToastVariant;
  duration: number;
}
