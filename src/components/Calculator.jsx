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
          <Button key={i} onTouchEnd={() => setValue(i)} className="number">
            {i}
          </Button>
        ))}
        {/* onClickやと反応が遅かった */}
        <Button onTouchEnd={() => setValue(0)} className="number zero">
          0
        </Button>
      </div>
      <div className="opeBoard">
        {operators.map((o, i) => {
          const isActive = o == operator && isHighLight;

          return (
            <Button
              key={i}
              onTouchEnd={() => setOperator(o)}
              className={`operator ${isActive ? "active" : ""}`}
            >
              {o}
            </Button>
          );
        })}
        <Button onTouchEnd={() => equal()} className="operator">
          =
        </Button>
      </div>
      <div className="others">
        <Button onTouchEnd={() => clear()} className="other">
          AC
        </Button>
        <Button className="other">±</Button>
        <Button className="other">％</Button>
      </div>
    </div>
  );
};

export default Calculator;
