import { useState } from "react"
import {Ac, Operador, Numero, Somar }from './Calculator'

function Tela(){

  const [display, setDisplay,] = useState('0')
    return( 

        <div id="container">
       <input className="value"value={display}readOnly />
      <br/>
       <button id="Ac"onClick={()=> Ac(setDisplay)}>AC</button>
       <button id="Operador" onClick={()=> Operador('%', setDisplay)}>%</button>
       <button id="Operador"onClick={()=> Operador('', setDisplay) }>+/-</button>
       <button id="Operador"onClick={()=> Operador('/', setDisplay)}>/</button>
      <br/>
       <button onClick={()=> Numero(7,setDisplay)}>7</button>
       <button onClick={()=> Numero(8, setDisplay)}>8</button>
       <button onClick={()=> Numero(9, setDisplay)}>9</button>
       <button id="Operador"onClick={()=> Operador('*', setDisplay)}>x</button>
     <br/>
       <button onClick={()=> Numero(4, setDisplay)}>4</button>
       <button onClick={()=> Numero(5, setDisplay)}>5</button>
       <button onClick={()=> Numero(6, setDisplay)}>6</button>
       <button id="Operador"onClick={()=> Operador('-', setDisplay)}>-</button>
    <br/>
       <button onClick={()=> Numero(1, setDisplay)}>1</button>
       <button onClick={()=> Numero(2, setDisplay)}>2</button>
       <button onClick={()=> Numero(3, setDisplay)}>3</button>
       <button id="Operador"onClick={()=> Operador('+', setDisplay)}>+</button>
        <br/>
       <button id="Numero" onClick={()=> Numero(0, setDisplay)}>0</button>
       <button onClick={()=> Operador('.', setDisplay)}>.</button>
       <button id="Somar"onClick={()=> Somar(display, setDisplay)}>=</button>
      </div>
)}
export default Tela