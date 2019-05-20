import React from "react";

import { useCalculatorState } from "../hooks";

const Calculator = () => {
  const num = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const operators = ["÷", "×", "-", "+"];
  const {
    operator,
    view,
    isCalculated,
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
          <button key={i} onClick={() => setValue(i)} className="number">
            {i}
          </button>
        ))}
        <button onClick={() => setValue(0)} className="number zero">
          0
        </button>
        <button className="number">.</button>
      </div>
      <div className="opeBoard">
        {operators.map((o, i) => (
          <button key={i} onClick={() => setOperator(o)} className="operator">
            {o}
          </button>
        ))}
        <button onClick={() => equal()} className="operator">
          =
        </button>
      </div>
      <div className="others">
        <button onClick={() => clear()} className="others">
          AC
        </button>
        <button className="others">±</button>
        <button className="others">％</button>
      </div>
    </div>
  );
};

export default Calculator;
