import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/views/home/Home';

function App() {
  return (
      <Router>
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Route>
      </Router>
  );
}

export default App;
