import React from 'react';
import Home from './Component/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Weather from './Component/Weather';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path='/'><Home /></Route>
        <Route path='/weather'><Weather /></Route>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
