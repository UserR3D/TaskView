import React, { SetStateAction } from 'react';
import { useFetch } from '../hooks/useFetch';
import { createdTask } from '../types/general';
import { useApi } from '../apiContext';

const FormIput = () => {
  const { getData } = useApi();
  const [task, setTask] = React.useState<React.SetStateAction<string | undefined>>();
  const [state, setState] = React.useState<SetStateAction<string>>('Starting');

  const { fetchData } = useFetch<createdTask>('http://localhost:3333/createTask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Task: task, Results: state }),
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await fetchData();
    await getData();
  }

  return (
    <form onSubmit={handleSubmit} className='input-task'>
      <label htmlFor='taskInput'>TaskName</label>
      <input id='taskInput' type='text' onChange={(e) => setTask(e.target.value)} />
      <label htmlFor='results'>Task state</label>
      <select name='selectResults' defaultValue={'Starting'} onChange={(e) => setState(e.target.value)}>
        <option value={'Starting'}>Starting</option>
        <option value={'Finished'}>Finished</option>
        <option value={'Aborted'}>Aborted</option>
      </select>
      <button type='submit'>Send</button>
    </form>
  );
};

export default FormIput;
