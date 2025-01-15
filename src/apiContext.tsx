import React from 'react';
export type ContextProvider = {
  onUpdate: boolean;
  setOnUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

const ApiContext = React.createContext<undefined | ContextProvider>({
  onUpdate: false,
  setOnUpdate: React.useState,
});

export const ApiContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [onUpdate, setOnUpdate] = React.useState<boolean>(false);
  return <ApiContext.Provider value={{ onUpdate, setOnUpdate }}>{children}</ApiContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useApi() {
  const context = React.useContext(ApiContext);
  if (!context) throw new Error('Context undefined');
  return context;
}
