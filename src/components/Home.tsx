import { useFetch } from '../hooks/useFetch';
import { ApiAll } from '../types/api';
import FormIput from '../components/FormInput';
import React from 'react';

export const Home = () => {
  const { data, isPending, error } = useFetch<ApiAll>('http://localhost:3333/');
  const [idTask, setIdTask] = React.useState();
  if (!data) return null;
  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <ul key={item.Id}>
              <li>{item.Id}</li>
              <li>{item.Task}</li>
              <li>{item.Results}</li>
            </ul>
          );
        })}
        <FormIput id={setIdTask} />
      </div>
    </>
  );
};
