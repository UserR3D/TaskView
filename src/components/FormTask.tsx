import React from 'react';
import Button from './Button';
import { useApi } from '../apiContext';

const FormTask = () => {
  const { getData, data } = useApi();
  const [results, setResults] = React.useState<string>();
  const [title, setTitle] = React.useState<string>();

  if (!data) return null;
  return (
    <>
      {data.map((item) => {
        return (
          <form key={item.Id} className='flex-c'>
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
              onChange={async (e) => {
                setResults(e.currentTarget.value);
                await getData();
              }}
            >
              <option value={'Starting'}>Starting</option>
              <option value={'Finished'}>Finished</option>
              <option value={'Aborted'}>Aborted</option>
            </select>
            <Button url={'http://localhost:3333/deleteTask'} id={item.Id} method={{ method: 'DELETE' }} title={'Delete'} />
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
