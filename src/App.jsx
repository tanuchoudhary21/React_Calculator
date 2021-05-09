import React from 'react';
import './index.css';
import { add, subtract, multiply, divide } from './Calc'

function App(){
    return(
        <>
            <div>
                    <ul>
                        <li>Sum is {add(40,4)}</li>
                        <li>Diffrence is {subtract(40,4)}</li>
                        <li>Multiplication is {multiply(40,4)}</li>
                        <li>Division is {divide(40,4)}</li>
                    </ul>
            </div>
  </>
    );
}

export default App;