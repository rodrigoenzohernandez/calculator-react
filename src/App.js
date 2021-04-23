//Installed components

//Created components

import Result from './components/Result'
import Button from './components/Button'

//Style

import './App.css';


const App = () => {
  // Lo que ejecuta la función
  console.log("Renderización de App")
  return (
    <main className='react-calculator'>

      <Result value={"0"} />

      <div className="numbers">
        <Button text="1" />
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
      <div className="functions">
        <button>
          clear
            </button>
        <button>
          r
            </button>
      </div>
      <div className="math-operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>

    </main>)
}

export default App;
