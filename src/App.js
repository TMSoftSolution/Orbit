import React from 'react';
import './App.css';
import {setup} from './script';

class App extends React.Component {
  componentDidMount() {
    {
      setup();
    }
  }

  render() {
    return (
      <div style={{height: "100vh"}}>
        <button id="mouse-control-control">test</button>
        <canvas id='canvas'></canvas>
      </div>
    );
  }
}

export default App;
