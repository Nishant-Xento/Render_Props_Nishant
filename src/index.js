import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Counter
        render={(count, increamentCount) => {
          return (
            <ClickCounter count={count} increamentCount={increamentCount} />
          );
        }}
      />
      <Counter
        render={(count, increamentCount) => {
          return (
            <HoverCounter count={count} increamentCount={increamentCount} />
          );
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
