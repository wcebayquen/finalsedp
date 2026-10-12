import './App.css';
import { useState } from 'react';

function App() {
  const[result, setResult] = useState("       ");
  const myclick = (value) => {
    setResult(result + value);
  }

  const calc = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error");
    }
  }
 return (
    <div className="App">
      <header className="App-header">
      <div className="bar">
        <p>{result}</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <button key={1} onClick={() => myclick('1')} className = "button">1</button>
              <button key={2} onClick={() => myclick('2')} className = "button">2</button>
              <button key={3} onClick={() => myclick('3')} className = "button">3</button>
              <button key={4} onClick={() => setResult('')} className = "button">C</button>
            </tr>
            <tr>
              <button key={5} onClick={() => myclick('4')} className = "button">4</button>
              <button key={6} onClick={() => myclick('5')} className = "button">5</button>
              <button key={7} onClick={() => myclick('6')} className = "button">6</button>
              <button key={8} onClick={() => myclick('-')} className = "button">-</button>
            </tr>
            <tr>
              <button key={9} onClick={() => myclick('7')} className = "button">7</button>
              <button key={10} onClick={() => myclick('8')} className = "button">8</button>
              <button key={11} onClick={() => myclick('9')} className = "button">9</button>
              <button key={12} onClick={() => myclick('*')} className = "button">*</button>
            </tr>
            <tr>
              <button key={13} onClick={() => myclick('/')} className = "button">/</button>
              <button key={14} onClick={() => myclick('0')} className = "button">0</button>
              <button key={15} onClick={() => myclick('+')} className = "button">+</button>
              <button key={16} onClick={calc} className = "button">=</button>
            </tr>
          </thead>
        </table>
      </header>
    </div>
  );
}

export default App;
