//Installed components

import React, { useState } from 'react'

//Created components

import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
//Style

import './App.css';


const App = () => {

  //useState devuelve un array con dos elementos (el state y la función que modifica ese state)


  //Array destructuring

  /* BEFORE
  
    const arrayStateFunction = useState("")
  const state = arrayStateFunction[0]
  const functionState = arrayStateFunction[1]

  */

  const [stack, setStack] = useState("");


  //mathOperations function values

  const onClickOperationFunction = (operation) => {
    console.log("clickOperation", operation)
    setStack(`${stack}${operation}`)

  }

  const onClickEqualFunction = (equal) => {
    console.log("EqualOperation", equal)
    setStack(eval(stack).toString())

  }

  //functions 

  const onContentClearFunction = () => {
    setStack(' ')
    console.log("ClearOperation")
  }

  const onDeleteFunction = () => {
    if (stack.length > 0){
      console.log("DeleteOperation")
      const newStack = stack.substring(0, stack.length -1)
      setStack(newStack)}


  }

  return (
    <main className='react-calculator'>

      <Result value={stack} />

      <Numbers onclickNumber={number => setStack(`${stack}${number}`)}/>

      <Functions onContentClear={onContentClearFunction} onDelete={onDeleteFunction}/>

      <MathOperations onClickOperation={onClickOperationFunction} onClickEqual={onClickEqualFunction} />

    </main>)
}

export default App;
