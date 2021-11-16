import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appoinments from './Pages/Appoinments/Appoinments/Appoinments';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/appoinments'>
          <Appoinments></Appoinments>
        </Route>
        <Route path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
