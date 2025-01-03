import React, { SetStateAction } from 'react';

const FormIput = ({ id }: { id: React.Dispatch<React.SetStateAction<undefined>> }) => {
  const [task, setTask] = React.useState<React.SetStateAction<string | undefined>>();
  const [state, setState] = React.useState<SetStateAction<string>>('Starting');
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    fetch('http://localhost:3333/createTask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Task: task, Results: state }),
    })
      .then((response) => response.json())
      .then((data) => id(data));
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
