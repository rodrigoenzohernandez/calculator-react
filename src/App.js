//Installed components

//Created components

import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
//Style

import './App.css';


const App = () => {

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

      <Numbers onclickNumber={number => console.log(number)}/>

      <Functions onContentClear={onContentClearFunction} onDelete={onDeleteFunction}/>

      <MathOperations onClickOperation={onClickOperationFunction} onClickEqual={onClickEqualFunction} />

    </main>)
}

export default App;
