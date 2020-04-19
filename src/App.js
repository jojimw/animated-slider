import React from 'react';
import Slider from './components/Slider';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h2 className="title">Choose a pet of your choice</h2>
      </div>

      <Slider />
    </div>
  );
}

export default App;
