import React, {useState} from 'react'
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  function increaseCount (){
       setCount (count => count +1)
  }

  function decreaseCount (){
    setCount (count => count -1)
}




  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}

export default App;
