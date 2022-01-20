import React from 'react';
import './App.css';

import Cities from './components/cities';

function App() {
  return (
    <div className="App">
      <div className='Title'>
        <h1> Learn A City  </h1>
      </div>
      <div>
        <Cities/>
      </div>
    </div>
  );
}

export default App;