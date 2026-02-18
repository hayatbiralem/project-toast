import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast({ variant, message }) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        variant,
        message
      }
    ];
    setToasts(nextToasts);
  }

  function removeToast(id) {
    const nextToasts = toasts.filter(toast => toast.id !== id);
    setToasts(nextToasts);
  }

  const value = {
    toasts,
    setToasts,
    addToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
