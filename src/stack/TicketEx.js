import React from "react";
import { css } from "emotion";

const styles = css`
  width: 400px;
  height: 150px;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
  border-radius: 12px;
  display: flex;
  overflow: hidden;
  > .left {
    flex-basis: 33.33%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    > .logo {
      width: 80px;
      height: 80px;
      background-color: hsl(0, 100%, 95%);
      border-radius: 50%;
    }
  }
  > .right {
    flex: auto;
    background-color: hsl(0, 100%, 98%);
    display: flex;
    align-items: center;
    justify-items: space-around;
    text-align: center;
    padding: 16px;
    > * {
      flex: 1;
      height: 100%;
      padding-top: 30%;
    }
  }

  .path {
    > .line {
      margin: 16px 0;
      border-top: 1px dashed rgba(0, 0, 0, 0.38);
      position: relative;
      > i {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: hsl(0, 100%, 98%);
        padding: 0 4px;
        color: hsl(0, 100%, 66%);
      }
    }
    button {
      border: 1px solid rgba(0, 0, 0, 0.38);
      border-radius: 40px;
      min-height: 24px;
      min-width: 48px;
    }
  }

  .from,
  .to {
    padding-left: 8px;
    padding-right: 8px;
  }

  .heading {
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 4px;
  }
  .subheader {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.38);
    margin: 0;
  }
  .rip {
    /* border-right: 1px dotted hsl(0, 100%, 80%); */
    width: 20px;
    flex-shrink: 0;
    margin: 10px 0;
    position: relative;
    background: linear-gradient(to right, #fff 50%, hsl(0, 100%, 98%) 50%);
    &:before,
    :after {
      content: " ";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border-radius: 50%;
      border: 6px solid;
      position: absolute;
      left: 50%;
    }
    &:before {
      top: -10px;
      border-left-color: white;
      border-bottom-color: hsl(0, 100%, 98%);
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:after {
      bottom: -10px;
      border-left-color: hsl(0, 100%, 98%);
      border-bottom-color: white;
      transform: translate(-50%, 50%) rotate(135deg);
    }
    .tear {
      position: absolute;
      border-right: 2px dotted hsl(0, 100%, 66%);
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }
`;

const TicketEx = () => (
  <div className={styles}>
    <div className="left">
      <div className="logo" />
    </div>
    <div className="rip">
      <div className="tear" />
    </div>
    <div className="right">
      <div className="from">
        <h1 className="heading">BEK</h1>
        <p className="subheader">Beijing China</p>
      </div>
      <div className="path">
        <div className="line">
          <i className="fas fa-plane" />
        </div>
        <button>AC618</button>
      </div>
      <div className="to">
        <h1 className="heading">DMK</h1>
        <p className="subheader">Don Meaung</p>
      </div>
    </div>
  </div>
);

export default TicketEx;
