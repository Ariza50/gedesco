import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from "./routes"

const App = () => (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
);

export default App;
