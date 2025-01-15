import { ApiAll } from '../types/api';
import { Nullable } from '../types/general';
import { useApi } from '../apiContext';
import React from 'react';
import Button from './Button';
import FormIput from './FormInput';

function FetchAll() {
  const { onUpdate, setOnUpdate } = useApi();
  const [data, setData] = React.useState<Nullable<ApiAll>>(null);

  React.useEffect(() => {
    async function getData() {
      const req = await fetch('http://localhost:3333');
      const res = (await req.json()) as ApiAll;
      setData(res);
    }
    getData();
    if (onUpdate === true) {
      getData();
      setOnUpdate(false);
    }
  }, [onUpdate, setOnUpdate]);
  if (!data) return null;

  return (
    <>
      {data?.map((item) => {
        return (
          <ul key={item.Id}>
            <Button id={item.Id} />
            <li>{item.Id}</li>
            <li>{item.Task}</li>
            <li>{item.Results}</li>
          </ul>
        );
      })}
      <FormIput />
    </>
  );
}

export default FetchAll;
