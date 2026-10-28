import './App.css';
import { useState } from 'react';

function App1() {
  const myname = "Chloe"
  const [myvalue, setMyvalue] = useState(0);

  const addfunction = () => {
    if(myvalue < 10) {
      setMyvalue(myvalue + 1);
    }
  }

  const minusfunction = () => {
    if(myvalue != 0) {
      setMyvalue(myvalue - 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello World, I am {myname} </h1>
        <h3> This is my first React project</h3>
        <div className = "mydiv">
          <h3> The value of x is {myvalue} </h3>
          <button onClick={addfunction} className = "button">+</button>
          <button onClick={minusfunction} className = "button">-</button>
        </div>
      </header>
    </div>
  );
}

export default App1;