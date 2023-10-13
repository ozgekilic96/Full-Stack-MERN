import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Users from './user/pages/User';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>
      <Redirect to="/" />
    </Router>
  )
}

export default App;
