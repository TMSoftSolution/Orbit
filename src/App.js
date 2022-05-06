import React from "react";
import "./App.css";
import { setup } from "./script";
import { Landing } from "./components";

class App extends React.Component {
  componentDidMount() {
    setup();
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <canvas id="canvas"></canvas>
        <Landing />
      </div>
    );
  }
}

export default App;
