import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../src/views/home/Home';
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { CourseDetails } from './views/course-details/CourseDetails';
import ShoppingCart from './views/shopping-cart/ShoppingCart';
import ScrollToTop from './components/ScrollToTop';
import PurchaseHistory from './views/history/PurchaseHistory'
import { SignUp } from './views/sign-up/SignUp';
import { LogIn } from './views/log-in/LogIn';
import { Auth } from './components/user/Auth';

function App() {
  const isLoggedIn = useSelector(state => state.loggedIn);

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
                {
                  isLoggedIn
                    ? <Route path="/history" component={PurchaseHistory} />
                    : <Redirect from="/history" to="/" />
                }
                {
                  !isLoggedIn
                      ? <Route path="/sign-up" component={SignUp} />
                      : <Redirect from="/sign-up" to="/" />
                }
                {
                  !isLoggedIn
                      ? <Route path="/log-in" component={LogIn} />
                      : <Redirect from="/log-in" to="/" />
                }
              </Switch>
              <Footer />
            </Route>
          </Auth>
        </ScrollToTop>
      </Router>
  )
}

export default App;
