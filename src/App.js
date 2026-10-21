import './App.css';
import { useState } from 'react';

function App() {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const actualusername = "admin";
  const actualpassword = "password";
  const loginClick = () => {
    if(username !== actualusername || password !== actualpassword) {
      console.log(username, password);
    } else {
    alert("Login Successful");
    }
  }

 return (
    <div className="App">
      <header className="App-header">
        <h1>Login Screen</h1>
        <div className="login-container">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
          <button onClick={loginClick} className="login-button">Login</button>
        </div>
      </header>
    </div>
  );
}

export default App;
