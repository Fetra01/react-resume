import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route compenent={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;