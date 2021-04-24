//Installed components

//Created components

import Result from './components/Result'
import Button from './components/Button'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'

//Style

import './App.css';


const App = () => {

  //If the arrow function has just one parameter, is not needed the parenthesis
  const clickHandlerFunction = text => console.log(text)

  //mathOperations function values

  const onClickOperationFunction = (operation) => {
    console.log("clickOperation", operation)
  }

  const onClickEqualFunction = (equal) => {
    console.log("EqualOperation", equal)
  }

  //functions 

  const onContentClearFunction = () => {
    console.log("ClearOperation")
  }

  const onDeleteFunction = () => {
    console.log("DeleteOperation")
  }

  return (
    <main className='react-calculator'>

      <Result value={"0"} />

      <div className="numbers">
        <Button text="1" clickHandler={clickHandlerFunction} />
        <Button text="2" clickHandler={clickHandlerFunction} />
        <Button text="3" clickHandler={clickHandlerFunction} />
        <Button text="4" clickHandler={clickHandlerFunction} />
        <Button text="5" clickHandler={clickHandlerFunction} />
        <Button text="6" clickHandler={clickHandlerFunction} />
        <Button text="7" clickHandler={clickHandlerFunction} />
        <Button text="8" clickHandler={clickHandlerFunction} />
        <Button text="9" clickHandler={clickHandlerFunction} />
        <Button text="0" clickHandler={clickHandlerFunction} />
      </div>

      <Functions onContentClear={onContentClearFunction} onDelete={onDeleteFunction}/>

      <MathOperations onClickOperation={onClickOperationFunction} onClickEqual={onClickEqualFunction} />

    </main>)
}

export default App;
