import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <LoginFormPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
