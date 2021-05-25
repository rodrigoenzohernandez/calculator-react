//Installed components
import React, { useState } from "react";
import words from "lodash.words";

//Created components
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";

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
      if(stack.length) setStack(eval(stack).toString());
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

  const value = items.length > 0 ? items[items.length - 1] : "0";

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
