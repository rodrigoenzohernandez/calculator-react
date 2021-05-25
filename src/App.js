//Installed components
import React, { useState } from "react";
import words from "lodash.words";

//Created components
import Result from "./components/Result/Result";
import MathOperations from "./components/MathOperations/MathOperations";
import Functions from "./components/Functions/Functions";
import Numbers from "./components/Numbers/Numbers";

//Style
import "./App.css";

const App = () => {
  const [stack, setStack] = useState("");
  const items = words(stack, /[^-^+^*^/]+/g);
  const operaciones = ["-", "+", "*", "/"];

  const onClickOperationFunction = (operation) => {
    //if las character on a string is an operator, is replaced with the new one
    let lastPosition = stack[stack.length - 1];
    if (operaciones.includes(lastPosition)) {
      onDeleteFunction();
    }
    setStack(`${stack}${operation}`);
  };

  const onClickEqualFunction = (equal) => {
    let lastPosition = stack[stack.length - 1];
    if (!operaciones.includes(lastPosition)) {
      /*eslint no-eval: "off"*/
      if (stack.length) setStack(eval(stack).toString());
    }
  };

  const onContentClearFunction = () => {
    setStack(" ");
  };

  const onDeleteFunction = () => {
    if (stack.length > 0) {
      const newStack = stack.substring(0, stack.length - 1);
      setStack(newStack);
    }
  };

  let value;
  let result = items[items.length - 1];
  if (items.length > 0) {
    if (stack.charAt(0) === "-") value = `-${result}`;
    //If is a negative result, show the minus
    else value = result;
  }

  return (
    <main className="react-calculator">
      <Result value={value} />

      <Numbers onclickNumber={(number) => setStack(`${stack}${number}`)} />

      <Functions
        onContentClear={onContentClearFunction}
        onDelete={onDeleteFunction}
      />

      <MathOperations
        onClickOperation={onClickOperationFunction}
        onClickEqual={onClickEqualFunction}
      />
    </main>
  );
};

export default App;
