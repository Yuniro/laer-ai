import { createContext, useCallback, useContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [demo, setDemo] = useState(false);

  const openDialog = useCallback((demo) => {
    setOpen(true);
    setDemo(demo);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ open, demo, openDialog, closeDialog }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
