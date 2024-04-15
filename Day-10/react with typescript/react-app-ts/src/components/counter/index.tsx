import React,{useState} from 'react';
import './index.css'

const Counter: React.FC = () => {
    // useState hook in react 
    const [value, setValue] = useState(15);
    console.log(value);
    const increment = () => setValue(value + 1);
    const decrement = () => {
        if(value === 0) return ;
        setValue(value - 1);
    }
    return (
      <div className="counter-container">
        <h1>{value}</h1>
        <button onClick={increment} className="increment">Increment</button>
        <button onClick={decrement} className="decrement">Decrement</button>
      </div>
    );
  };
  
  export default Counter;
  