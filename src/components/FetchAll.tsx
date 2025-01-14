import React from 'react';
import { ApiAll } from '../types/api';
import { Nullable } from '../types/general';

function FetchAll() {
  const [data, setData] = React.useState<Nullable<ApiAll>>(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:3333/');
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };
    getData();
  }, []);

  return (
    <>
      {!data ||
        data.map((item) => {
          return (
            <ul key={item.Id}>
              <li>{item.Id}</li>
              <li>{item.Task}</li>
              <li>{item.Results}</li>
            </ul>
          );
        })}
    </>
  );
}

export default FetchAll;
