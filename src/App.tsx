import { ApiContextProvider } from './apiContext';
import { Home } from './components/Home';
const App = () => {
  return (
    <ApiContextProvider>
      <Home />
    </ApiContextProvider>
  );
};

export default App;
