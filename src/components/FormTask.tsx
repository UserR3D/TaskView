import React from 'react';
import Button from './Button';
import { ApiAll } from '../types/api';
import { useApi } from '../apiContext';

const FormTask = ({ data }: { data: ApiAll }) => {
  const { setOnUpdate } = useApi();
  const [results, setResults] = React.useState<string>();
  const [title, setTitle] = React.useState<string>();

  if (!data) return null;
  return (
    <>
      {data.map((item, index) => {
        return (
          <form key={index}>
            <input
              type='text'
              defaultValue={item.Task}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <select
              name='selectResults'
              defaultValue={item.Results}
              onChange={(e) => {
                setResults(e.currentTarget.value);
                setOnUpdate(true);
                console.log(results);
              }}
            >
              <option value={'Starting'}>Starting</option>
              <option value={'Finished'}>Finished</option>
              <option value={'Aborted'}>Aborted</option>
            </select>
            <Button url={'http://localhost:3333/deleteTask'} id={item.Id} method={{ method: 'DELETE' }} title={'Deletar'} />
            <Button
              url={'http://localhost:3333/updateTask'}
              id={item.Id}
              method={{ method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ Task: title || item.Task, Results: results || item.Results }) }}
              title={'Update'}
            />
          </form>
        );
      })}
    </>
  );
};

export default FormTask;
