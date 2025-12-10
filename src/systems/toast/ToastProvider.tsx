import { useCallback, useEffect, useRef, useState } from "react"
import type { ReactNode } from "react";
import type { ToastObj, ToastOptions } from "./toast.types";
import { ToastContext } from "./toast.context";
import ToastPortal from "./ToastPortal";
import styles from "./ToastProvider.module.css";
import Toast from "../../comps/Toast/Toast";

type ToastProviderProps = {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  // Array of toasts stored as state.
  const [toasts, setToasts] = useState<ToastObj[]>([]);
  // Parallel timer array for each toast.
  const timers = useRef<Map<string, number>>(new Map());

  const removeToast = useCallback((id: string) => {
    // Remove the toast with the specified ID.
    setToasts(prev => prev.filter((t) => t.id !== id));
    
    // Get the timer of that toast.
    const timer = timers.current.get(id);
    
    // If the timer exists
    if (timer) {
      // clear that timer
      window.clearTimeout(timer);
      // remove the timer ID
      timers.current.delete(id);
    }
  }, []);

  const addToast = useCallback((message: string, options?: ToastOptions) => {
    const id = crypto.randomUUID();
    const duration = options?.duration ?? 3000;

    const newToast: ToastObj = {
      id,
      message,
      duration, 
      variant: options?.variant ?? "default"
    };

    setToasts(prev => [...prev, newToast]);

    const timer = window.setTimeout(() => {
      removeToast(id);
    }, duration);

    timers.current.set(id, timer);
  }, [removeToast]);

  useEffect(() => {
    return () => {
      // Cleanup timers on unmount.
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current.clear();
    }
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
      
      <ToastPortal>
        <div className={styles.toastRoot}>
          {toasts.map(toast => (
            <Toast key={toast.id} message={toast.message} variant={toast.variant} />
          ))}
        </div>
      </ToastPortal>
    </ToastContext.Provider>
  );
}
