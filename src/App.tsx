import { ApiContextProvider } from './apiContext';
import './assets/geral.css';
import { Home } from './components/Home';
const App = () => {
  return (
    <ApiContextProvider>
      <Home />
    </ApiContextProvider>
  );
};

export default App;
