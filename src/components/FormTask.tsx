import React from 'react';
import Button from './Button';
import { ApiAll } from '../types/api';
const FormTask = ({ data }: { data: ApiAll }) => {
  const [title, setTitle] = React.useState();
  const [results, setResults] = React.useState();
  return (
    <>
      {data.map((item, index) => {
        return (
          <form key={index}>
            <input
              type='text'
              value={item.Task}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <select name='selectResults' defaultValue={item.Results}>
              <option value={'Starting'}>Starting</option>
              <option value={'Finished'}>Finished</option>
              <option value={'Aborted'}>Aborted</option>
            </select>
            <Button id={item.Id} />
          </form>
        );
      })}
    </>
  );
};

export default FormTask;
