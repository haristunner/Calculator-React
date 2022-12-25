import React, { useEffect, useState } from "react";
import "./calculator.css";
import { NumericFormat } from "react-number-format";

export const Calculator = () => {
  const [input, setInput] = useState("0");
  const [prevState, setPrevState] = useState();
  const [currState, setCurrState] = useState();
  const [total, setTotal] = useState(false);
  const [op, setOp] = useState();

  const inputNum = (e) => {
    if (e.target.innerText === "." && currState.includes(".")) return;

    if (total) {
      setPrevState("");
    }

    currState
      ? setCurrState((prev) => prev + e.target.innerText)
      : setCurrState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(currState);
  }, [currState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const deleteAll = (e) => {
    setInput("0");
    setCurrState("");
    setPrevState("");
  };

  const operator = (e) => {
    setTotal(false);

    setOp(e.target.innerText);
    if (currState === "") return;

    if (prevState !== "") {
      equals();
    } else {
      setPrevState(currState);
      setCurrState("");
    }
  };

  const equals = (e) => {
    if (e.target.innerText === "=") setTotal(true);

    let cal;

    switch (op) {
      case "/": {
        cal = String(parseFloat(prevState) / parseFloat(currState));
        break;
      }

      case "X": {
        cal = String(parseFloat(prevState) * parseFloat(currState));
        break;
      }

      case "+": {
        cal = String(parseFloat(prevState) + parseFloat(currState));
        break;
      }

      case "-": {
        cal = String(parseFloat(prevState) - parseFloat(currState));
        break;
      }

      default:
        return;
    }
    setInput("");
    setPrevState(cal);
    setCurrState("");
  };

  const remove = (e) => {
    setCurrState(currState.slice(0, -1));
  };

  const modulos = (e) => {
    prevState
      ? setCurrState(String((parseFloat(currState) / 100) * prevState))
      : setCurrState(String(parseFloat(currState) / 100));
  };

  return (
    <div className="calculator">
      <div className="container">
        <div className="all">
          <div className="screen">
            {input !== "" || input === "0" ? (
              <NumericFormat
                value={input}
                displayType={"text"}
                thousandSeparator={true}
              />
            ) : (
              <NumericFormat
                value={prevState}
                displayType={"text"}
                thousandSeparator={true}
              />
            )}
          </div>

          <div className="first" onClick={deleteAll}>
            AC
          </div>
          <div className="first" onClick={remove}>
            C
          </div>
          <div className="first" onClick={modulos}>
            %
          </div>
          <div className="yellow" onClick={operator}>
            /
          </div>

          <div className="second" onClick={inputNum}>
            7
          </div>
          <div className="second" onClick={inputNum}>
            8
          </div>
          <div className="second" onClick={inputNum}>
            9
          </div>
          <div className="yellow" onClick={operator}>
            X
          </div>

          <div className="second" onClick={inputNum}>
            4
          </div>
          <div className="second" onClick={inputNum}>
            5
          </div>
          <div className="second" onClick={inputNum}>
            6
          </div>
          <div className="yellow" onClick={operator}>
            +
          </div>

          <div className="second" onClick={inputNum}>
            1
          </div>
          <div className="second" onClick={inputNum}>
            2
          </div>
          <div className="second" onClick={inputNum}>
            3
          </div>
          <div className="yellow" onClick={operator}>
            -
          </div>

          <div className="second-0" onClick={inputNum}>
            0
          </div>
          <div className="second" onClick={inputNum}>
            .
          </div>
          <div className="second" onClick={equals}>
            =
          </div>
        </div>
      </div>
    </div>
  );
};
