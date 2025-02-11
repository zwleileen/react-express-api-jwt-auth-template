// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <ul>
        <li><Link to='/sign-up'>Sign Up</Link></li>
      </ul>
      </nav>
    );
  };
  
  export default NavBar;
  
  