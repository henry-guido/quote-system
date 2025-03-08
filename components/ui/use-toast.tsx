"use client"

import { createContext, useContext, useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, variant = "default", duration = 5000 }) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, title, description, variant, duration }])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, duration)
  }

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast, dismissToast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 md:top-0 md:bottom-auto">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "pointer-events-auto flex w-full max-w-md items-center justify-between rounded-lg border p-4 shadow-lg transition-all",
              "bg-white dark:bg-gray-800",
              toast.variant === "destructive" &&
                "border-red-500 bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-50",
            )}
          >
            <div className="flex flex-col gap-1">
              {toast.title && <p className="font-medium">{toast.title}</p>}
              {toast.description && <p className="text-sm text-gray-500 dark:text-gray-400">{toast.description}</p>}
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context.toast
}

