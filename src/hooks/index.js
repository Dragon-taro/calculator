import { useState } from "react";

export const useCalculatorState = () => {
  // 使うstateの宣言
  const [value, _setValue] = useState(0);
  const [operator, _setOperator] = useState("");
  const [result, _setResult] = useState(0);
  const [view, _setView] = useState(0);
  // 途中の計算が行われたかどうか
  const [isCalculated, _setIsCalculated] = useState(true);
  // イコールが押されたかどうか
  const [isFinished, _setIsCFinished] = useState(true);

  // 状態更新の関数を宣言
  const setValue = num => {
    if (isCalculated) {
      _setIsCalculated(false);
      _setValue(num);
      _setView(num);
    } else {
      const newValue = value * 10 + num;
      _setValue(newValue);
      _setView(newValue);
    }
  };

  const setOperator = ope => {
    _setOperator(ope);

    if (!isCalculated) {
      _setIsCFinished(true);
      calculateResult(ope);
    }
  };

  const equal = () => {
    calculateResult(operator);
  };

  const clear = () => {
    _setValue(0);
    _setResult(0);
    _setView(0);
    _setOperator("");
    _setIsCalculated(true);
    _setIsCFinished(true);
  };

  // その他内部で使う関数
  const calculate = ope => {
    switch (ope) {
      case "+":
        return result + value;
      case "-":
        return result - value;
      case "×":
        return result * value;
      case "÷":
        return result / value;
      default:
        return result || value;
    }
  };

  const calculateResult = ope => {
    const _result = calculate(ope);

    _setIsCalculated(true);
    _setResult(_result);
    _setView(_result);
  };

  return {
    operator,
    view,
    isCalculated,
    setValue,
    setOperator,
    equal,
    clear
  };
};
