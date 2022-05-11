import { Link } from 'react-router-dom';

import Logo from '../Logo';
import './index.css';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      {/* <ul className="nav">
        <li className="nav-item">
          <Link to="/launches">
            Launches
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">
            About
          </Link>
        </li>
      </ul> */}
    </header>
  )
}