import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/views/home/Home';
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { CourseDetails } from './views/course-details/CourseDetails';
import ShoppingCart from './views/shopping-cart/ShoppingCart';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
      <Router>
        <ScrollToTop>
          <Route>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/course-details/:id" component={CourseDetails} />
              <Route path="/cart" component={ShoppingCart} />
            </Switch>
            <Footer />
          </Route>
        </ScrollToTop>
      </Router>
  )
}

export default App;
