import { Provider } from 'react-redux';
import store from './Store/store';

import { HpApp } from './components/HpApp';
import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <HpApp />
    </Provider>
  );
}

export default App