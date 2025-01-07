export type ApiAll = {
  Id: number;
  Task: string;
  Results: 'Starting' | 'Finished' | 'Aborted';
}[];
