import { ApiResponse } from '../types/api';
import { Nullable } from '../types/general';
import React from 'react';

export function useFetch<T>(url: string, options?: RequestInit): ApiResponse<T> {
  const [data, setData] = React.useState<Nullable<T>>(null);
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Nullable<Error | string>>(null);

  const fetchData = async () => {
    setIsPending(true);
    try {
      const response = await fetch(url, options);
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

  return { data, isPending, error, fetchData };
}
