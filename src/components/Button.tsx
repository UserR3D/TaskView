import { useApi } from '../apiContext';
import { useFetch } from '../hooks/useFetch';

const Box = ({ id }: { id: number }) => {
  const { setOnUpdate } = useApi();
  const { fetchData } = useFetch(`http://localhost:3333/deleteTask/${id}`, { method: 'DELETE' });

  return (
    <button
      onClick={() => {
        fetchData();
        setOnUpdate(true);
      }}
    >
      Deletar
    </button>
  );
};

export default Box;
