// src/components/Header/Header.jsx
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'; // ✅ Импорт NavLink

function Header() {
  return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" style={({isActive })=>({color: isActive ? 'rgb(253, 13, 220)' : 'white',})} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" style={({isActive })=>({color: isActive ? 'rgb(253, 13, 220)' : 'white',})} to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Header;    