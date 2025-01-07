import { Nullable } from '../types/general';
import React from 'react';

type ApiResponse<T> = {
  data: Nullable<T>;
  isPending: boolean;
  error: Nullable<Error | string>;
};

export function useFetch<T>(url: string): ApiResponse<T> {
  const [data, setData] = React.useState<Nullable<T>>(null);
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Nullable<Error | string>>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error instanceof Error) {
          setError(`${error}: Could not fetch Data`);
        }
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
}
