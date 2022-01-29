import './App.css';
import Router from './routes';
import {BrowserRouter} from 'react-router-dom';

const App = () => (
  <div>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </div>
);

export default App;
