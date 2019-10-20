import React from "react";
import { css } from "emotion";

const styles = css`
  width: 400px;
  height: 150px;
  border-radius: 12px;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
  /* box-shadow: 0 2px 8px 0 rgba(0,0,0,0.38); */
  display: flex;
  overflow: hidden;

  .left {
    flex-basis: 33.33%;
    display: flex;
    background-color: #fff;
  }

  .right {
    flex: 1;
    background-color: hsl(216, 100%, 96%);
    display: flex;
    padding: 16px;
    align-items: center;
    text-align: center;
  }

  .logo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: hsl(216, 100%, 96%);
    margin: auto;
  }

  .from,
  .to {
    flex: 1;
    h1 {
      font-size: 24px;
      margin: 0;
      margin-bottom: 4px;
    }
    p {
      margin: 0;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.38);
    }
  }

  .path {
    button {
      border-radius: 40px;
      min-height: 28px;
      border: 1px solid rgba(0, 0, 0, 0.38);
    }
  }

  .line {
    border-bottom: 1px dashed rgba(0, 0, 0, 0.38);
    margin: 16px 0;
    position: relative;
    > i {
      position: absolute;
      top: 50%;
      left: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0 4px;
      background-color: hsl(216, 100%, 96%);
    }
  }

  .rip {
    position: relative;
    flex-basis: 20px;
    margin: 10px 0;
    background-color: #fff;
    background: linear-gradient(to right, #fff 50%, hsl(216, 100%, 96%) 50%);
    :before {
      display: block;
      content: " ";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      border: 5px solid #fff;
      border-bottom-color: #fff;
      border-right-color: hsl(216, 100%, 96%);
      top: -10px;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    .abd {
      position: absolute;
      width: 0;
      border-right: 3px dotted hsl(222, 100%, 66%);
      height: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TicketDemo = () => (
  <div className={styles}>
    <div className="left">
      <div className="logo" />
    </div>
    <div className="rip">
      <div className="abd" />
    </div>
    <div className="right">
      <div className="from">
        <h1>BEK</h1>
        <p>Beijing China</p>
      </div>
      <div className="path">
        <div className="line">
          <i className="fas fa-plane" />
        </div>
        <button>AC618</button>
      </div>
      <div className="to">
        <h1>DMK</h1>
        <p>Don meaung</p>
      </div>
    </div>
  </div>
);

export default TicketDemo;
