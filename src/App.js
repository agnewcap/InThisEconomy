import React from 'react';
import Site from './Site/site';
import {BrowserRouter} from 'react-router-dom';
import Aux from './hoc/auxiliary';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Aux>
          <Site />
        </Aux>
      </BrowserRouter>

    </div>
  );
}

export default App;
