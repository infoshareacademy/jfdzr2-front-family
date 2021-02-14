import { Switch, Route } from 'react-router-dom';
import Home from "../home/Home";

const Content = () => {
    return ( 
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
     );
}
 
export default Content;