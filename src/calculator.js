import React, { useEffect, useState } from "react";
import "./calculator.css";

export const Calculator = () => {
  const [input, setInput] = useState("0");
  const [prevState, setPrevState] = useState();
  const [currState, setCurrState] = useState();
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (e.target.innerText === "." && currState.includes(".")) return;

    currState
      ? setCurrState((prev) => prev + e.target.innerText)
      : setCurrState(e.target.innerText);
  };

  useEffect(() => {
    setInput(currState);
  }, [currState]);

  useEffect(() => {
    setInput("0");
  }, []);

  return (
    <div className="calculator">
      <div className="container">
        <div className="all">
          <div className="screen">{input}</div>

          <div className="first">AC</div>
          <div className="first">%</div>
          <div className="first">+/-</div>
          <div className="yellow">/</div>

          <div className="second" onClick={inputNum}>
            7
          </div>
          <div className="second" onClick={inputNum}>
            8
          </div>
          <div className="second" onClick={inputNum}>
            9
          </div>
          <div className="yellow">%</div>

          <div className="second" onClick={inputNum}>
            4
          </div>
          <div className="second" onClick={inputNum}>
            5
          </div>
          <div className="second" onClick={inputNum}>
            6
          </div>
          <div className="yellow">+</div>

          <div className="second" onClick={inputNum}>
            1
          </div>
          <div className="second" onClick={inputNum}>
            2
          </div>
          <div className="second" onClick={inputNum}>
            3
          </div>
          <div className="yellow">-</div>

          <div className="second-0" onClick={inputNum}>
            0
          </div>
          <div className="second" onClick={inputNum}>
            .
          </div>
          <div className="second">=</div>
        </div>
      </div>
    </div>
  );
};
