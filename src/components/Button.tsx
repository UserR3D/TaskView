import { useApi } from '../apiContext';
import { useFetch } from '../hooks/useFetch';

interface ButtonProps {
  url: string;
  id: number;
  method: RequestInit;
  title: string;
}

const Button = ({ url, id, method, title }: ButtonProps) => {
  const { getData } = useApi();
  const { fetchData } = useFetch(`${url}/${id}`, method);

  return (
    <button
      onClick={async (e) => {
        e.preventDefault();
        await fetchData();
        await getData();
      }}
    >
      {title}
    </button>
  );
};

export default Button;
