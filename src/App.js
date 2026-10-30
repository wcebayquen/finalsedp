import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Nav from './Nav';
import Home from './App1';
import Calculator from './App2';
import Login from './App3';

const NavbarLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<NavbarLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/logout" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
} 

export default App;
