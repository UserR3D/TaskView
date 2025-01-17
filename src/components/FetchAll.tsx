import FormIput from './FormInput';
import FormTask from './FormTask';

function FetchAll() {
  return (
    <div className='flex'>
      <FormIput />
      <FormTask />
    </div>
  );
}

export default FetchAll;
