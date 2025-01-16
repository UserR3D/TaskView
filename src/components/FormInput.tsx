import React, { SetStateAction } from 'react';
import { useFetch } from '../hooks/useFetch';
import { createdTask } from '../types/general';
import { useApi } from '../apiContext';

const FormIput = () => {
  const { setOnUpdate } = useApi();
  const [task, setTask] = React.useState<React.SetStateAction<string | undefined>>();
  const [state, setState] = React.useState<SetStateAction<string>>('Starting');

  const { fetchData } = useFetch<createdTask>('http://localhost:3333/createTask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Task: task, Results: state }),
  });

  function handleSubmit(event: React.FormEvent) {
    setOnUpdate(true);
    event.preventDefault();
    fetchData();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='taskInput'>TaskName</label>
      <input id='taskInput' type='text' onChange={(e) => setTask(e.target.value)} />
      <label htmlFor='results'>Estado da tarefa</label>
      <select name='selectResults' defaultValue={'Starting'} onChange={(e) => setState(e.target.value)}>
        <option value={'Starting'}>Iniciando</option>
        <option value={'Finished'}>Finalizado</option>
        <option value={'Aborted'}>Abortado</option>
      </select>
      <button type='submit'>teste</button>
    </form>
  );
};

export default FormIput;
