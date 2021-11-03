import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./components/Login/Login"; 
import { Dashboard } from './components/Dashboard/Dashboard';
import PrivateRoute from './Routes/PrivateRoute';
function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
