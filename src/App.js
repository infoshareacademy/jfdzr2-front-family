import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/views/home/Home';
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { CourseDetails } from './views/course-details/CourseDetails';
import ShoppingCart from './views/shopping-cart/ShoppingCart';
import ScrollToTop from './components/ScrollToTop';
import { SignUp } from './views/sign-up/SignUp';
import { Auth } from './components/user/Auth';

function App() {
  return (
      <Router>
        <ScrollToTop>
          <Auth>
            <Route>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/course-details/:id" component={CourseDetails} />
                <Route path="/cart" component={ShoppingCart} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
              <Footer />
            </Route>
          </Auth>
        </ScrollToTop>
      </Router>
  )
}

export default App;
