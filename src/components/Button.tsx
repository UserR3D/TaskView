import { useApi } from '../apiContext';
import { useFetch } from '../hooks/useFetch';

interface ButtonProps {
  url: string;
  id: number;
  method: RequestInit;
  title: string;
}

const Button = ({ url, id, method, title }: ButtonProps) => {
  const { setOnUpdate } = useApi();
  const { fetchData } = useFetch(`${url}/${id}`, method);

  return (
    <button
      onClick={(e) => {
        setOnUpdate(true);
        e.preventDefault();
        fetchData();
      }}
    >
      {title}
    </button>
  );
};

export default Button;
