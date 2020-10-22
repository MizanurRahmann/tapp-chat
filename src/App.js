import React from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path='/'>
          <main>
            <p>Home</p>
          </main>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
