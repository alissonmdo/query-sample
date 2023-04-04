import { useEffect, useState } from "react";
import { Styles } from "../config/styles.type";

export type ToastProps = {
  message: string;
  type: "success" | "error";
};

export function Toast(props: ToastProps) {
  const { message, type } = props;
  const { toast } = useToast(props);
  return toast && message && type ? (
    <div style={{ ...styles.container, ...styles[toast.type] }}>
      <div style={styles.message}>{toast.message}</div>
    </div>
  ) : null;
}

export function useToast({ message, type }: ToastProps) {
  const [toast, setToast] = useState<ToastProps | null>(null);

  useEffect(() => {
    setToast({ message, type });
    const timeoutId = setTimeout(() => {
      setToast(null);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [message, type]);

  return { toast };
}

const styles = {
  container: {
    padding: "10px",
    borderRadius: "10px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  success: {
    backgroundColor: "lightgreen",
  },
  error: {
    backgroundColor: "lightcoral",
  },
  message: {
    backgroundColor: "lightblue",
    padding: "10px",
    borderRadius: "10px",
  },
} satisfies Styles;
