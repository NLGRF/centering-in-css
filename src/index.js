import React from "react";
import ReactDOM from "react-dom";
import { css } from "emotion";
import TicketEx from "./stack/TicketEx";
import TicketDemo from "./stack/TicketDemo";

import "./index.css";

const appStyles = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  & > div {
    flex: 1;
  }

  .example-section,
  .demo-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .example-section {
    background-color: #ff5252;
  }

  .demo-section {
    background-color: #5287ff;
  }
`;

function App() {
  return (
    <div className={appStyles}>
      <div className="example-section">
        <TicketEx />
      </div>
      <div className="demo-section">
        <TicketDemo />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
