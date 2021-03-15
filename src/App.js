import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/views/home/Home';
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { CourseDetails } from './views/course-details/CourseDetails';
import ShoppingCart from './views/shopping-cart/ShoppingCart';

function App() {
  return (
      <Router>
        <Route>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/course-details" component={CourseDetails} />
            <Route path="/cart" component={ShoppingCart} />
          </Switch>
          <Footer />
        </Route>
      </Router>
  )
}

export default App;
