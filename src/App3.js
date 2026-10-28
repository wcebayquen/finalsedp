import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  
  const actualusername = "admin";
  const actualpassword = "password";

  const loginClick = () => {
    if(username !== actualusername || password !== actualpassword) {
      console.log(username, password);
      alert("Invalid credentials!");
    } else {
      alert("Login Successful");
      navigate("/home"); 
    }
  }

 return (
    <div className="App">
      {}
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

export default Login;