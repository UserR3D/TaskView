import React, { SetStateAction } from 'react';

type Api = {
  Id: number;
  Task: string;
  Results: 'Starting' | 'Finished' | 'Aborted';
}[];

const App = () => {
  const [data, setData] = React.useState<Api>();
  const [idTask, setIdTask] = React.useState();
  const [task, setTask] = React.useState<React.SetStateAction<string | undefined>>();
  const [state, setState] = React.useState<SetStateAction<string>>('Starting');
  React.useEffect(() => {
    fetch('http://localhost:3333/').then((response) => {
      response.json().then((value) => setData(value));
    });
  }, [idTask]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    fetch('http://localhost:3333/createTask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Task: task, Results: state }),
    })
      .then((response) => response.json())
      .then((data) => setIdTask(data));
  }

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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='taskInput'>TaskName</label>
            <input id='taskInput' type='text' onChange={(e) => setTask(e.target.value)} />
            <label htmlFor='results'>Estado da tarefa</label>
            <select name='selectResults' defaultValue={'Starting'} onChange={(e) => setState(e.target.value)}>
              <option value={'Starting'}>Iniciando</option>
              <option value={'Finished'}>Finalizado</option>
              <option value={'Aborted'}>Abortado</option>
            </select>
          </div>
          <button type='submit'>teste</button>
        </form>
      </div>
    </>
  );
};

export default App;
