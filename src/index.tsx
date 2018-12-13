import * as React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>RxJS Playground</h2>
    <h3>Drawing on Canvas</h3>
    <h4>By Brenno Ferreira</h4>

    <canvas id="canvas" />
  </div>
);

render(<App />, document.getElementById("root"));
