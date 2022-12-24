import React from "react";
import "./calculator.css"

export const Calculator = () => {
  return (
    <div className="calculator">
        <div className="container">
        <div className="all">
        <div className="screen"></div>
        <div className="btn-row">
          <div className="first">AC</div>
          <div className="first">%</div>
          <div className="first">+/-</div>
          <div className="yellow">/</div>
        </div>
        <div className="btn-row">
          <div className="second">7</div>
          <div className="second">8</div>
          <div className="second">9</div>
          <div className="yellow">%</div>
        </div>
        <div className="btn-row">
          <div className="second">4</div>
          <div className="second">5</div>
          <div className="second">6</div>
          <div className="yellow">+</div>
        </div>
        <div className="btn-row">
          <div className="second">1</div>
          <div className="second">2</div>
          <div className="second">3</div>
          <div className="yellow">-</div>
        </div>
        <div className="btn-row">
          <div className="second">0</div>
          <div className="second">.</div>
          <div className="second">=</div>
        </div>
      </div>
        </div>
      
    </div>
  );
};
