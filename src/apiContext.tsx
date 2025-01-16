import React from 'react';
import { Nullable } from './types/general';
import { ApiAll } from './types/api';
export type ContextProvider = {
  data: Nullable<ApiAll>;
  setData: React.Dispatch<React.SetStateAction<Nullable<ApiAll>>>;
  getData(): Promise<void>;
};

const ApiContext = React.createContext<undefined | ContextProvider>({
  data: null,
  setData: React.useState,
  getData: async () => {},
});

export const ApiContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState<Nullable<ApiAll>>(null);
  async function getData() {
    const req = await fetch('http://localhost:3333');
    const res = (await req.json()) as ApiAll;
    setData(res);
  }
  React.useEffect(() => {
    getData();
  }, []);
  return <ApiContext.Provider value={{ data, setData, getData }}>{children}</ApiContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useApi() {
  const context = React.useContext(ApiContext);
  if (!context) throw new Error('Context undefined');
  return context;
}
