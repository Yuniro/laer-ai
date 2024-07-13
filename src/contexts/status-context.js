import { createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  const location = useLocation();

  useLayoutEffect(() => {
    setMounted(false);
  }, [location.pathname]);


  const loaded = useCallback((flag = true) => {
    setMounted(flag);
  }, []);

  return (
    <StatusContext.Provider value={{ mounted, loaded }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatusContext = () => useContext(StatusContext);
