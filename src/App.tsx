import React, { SetStateAction } from 'react';
import FormIput from './components/FormInput';

type Api = {
  Id: number;
  Task: string;
  Results: 'Starting' | 'Finished' | 'Aborted';
}[];
const App = () => {
  const [data, setData] = React.useState<Api>();
  const [idTask, setIdTask] = React.useState();
  React.useEffect(() => {
    fetch('http://localhost:3333/').then((response) => {
      response.json().then((value) => setData(value));
    });
  }, [idTask]);

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

export default App;
