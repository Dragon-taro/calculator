import React from "react";

import { useCalculatorState } from "../hooks";
import Button from "./Button";

const Calculator = () => {
  const num = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const operators = ["÷", "×", "-", "+"];
  const {
    operator,
    view,
    isHighLight,
    setValue,
    setOperator,
    equal,
    clear
  } = useCalculatorState();

  return (
    <div className="wrapper">
      <div className="view">{view}</div>
      <div className="numBoard">
        {num.map(i => (
          <Button key={i} onClick={() => setValue(i)} className="number">
            {i}
          </Button>
        ))}
        <Button onClick={() => setValue(0)} className="number zero">
          0
        </Button>
      </div>
      <div className="opeBoard">
        {operators.map((o, i) => {
          const isActive = o == operator && isHighLight;

          return (
            <Button
              key={i}
              onClick={() => setOperator(o)}
              className={`operator ${isActive ? "active" : ""}`}
            >
              {o}
            </Button>
          );
        })}
        <Button onClick={() => equal()} className="operator">
          =
        </Button>
      </div>
      <div className="others">
        <Button onClick={() => clear()} className="other">
          AC
        </Button>
        <Button className="other">±</Button>
        <Button className="other">％</Button>
      </div>
    </div>
  );
};

export default Calculator;
