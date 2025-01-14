import { Nullable } from './general';

export type ApiAll = {
  Id: number;
  Task: string;
  Results: 'Starting' | 'Finished' | 'Aborted';
}[];

export type AsnwerApi<T> = {
  data: Nullable<T>;
  isPending: boolean;
  error: Nullable<Error | string>;
};

export type FetchData = {
  fetchData(): Promise<void>;
};

export interface ApiResponse<T> extends FetchData, AsnwerApi<T> {}
