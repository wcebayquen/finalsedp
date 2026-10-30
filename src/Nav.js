import { NavLink } from "react-router-dom";
import './App.css';

// function Nav() {
//     return (
//         <nav className="nav">
//             <div>
//                 <NavLink to="/home" className="nav-link">My Projects</NavLink>
//             </div>
//             <ul>
//                 <li><NavLink to="/home" className="nav-link">Home</NavLink></li>
//                 <li><NavLink to="/calculator" className="nav-link">Calculator</NavLink></li>
//                 <li><NavLink to="/counter" className="nav-link">Click Counter</NavLink></li>
//                 <li><NavLink to="/logout" className="nav-link">Logout</NavLink></li>
//             </ul>
//         </nav>
//     )
// }

// export default Nav;
function Nav() {
return (
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="# My Project">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <NavLink to="/home" className="nav-link active">
            Home
            <span class="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/calculator" className="nav-link">
            Calculator
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/logout" className="nav-link">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
export default Nav;