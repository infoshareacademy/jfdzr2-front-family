import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/views/home/Home';
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
      <Router>
        <Route>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Route>
      </Router>
  )
}

export default App;
