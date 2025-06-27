// src/hooks/use-toast.ts
import { toast as notify } from "react-toastify";

type ToastOptions = {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
};

export const useToast = () => {
  return {
    toast: ({ title, description, variant = "default" }: ToastOptions) => {
      const message = description ? `${title}: ${description}` : title;
      if (variant === "destructive") {
        notify.error(message);
      } else {
        notify.success(message);
      }
    },
  };
};
