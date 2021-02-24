import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [aside, setAside] = useState(false);

  return (
    <header>
      <div className="logo">
        <span className="design">
          <Link to="/">Munif</Link>
        </span>
      </div>
      <button className="bars" onClick={() => setAside(!aside)}>
        <i className={`fas fa-${aside ? 'times' : 'bars'}`}></i>
      </button>
      <nav className="links">
        <ul className={`links ${aside ? 'show' : ''}`}>
          {links.map(({ h, n }) => (
            <li key={h}>
              <NavLink to={h}
                onClick={() => setAside(false)}
              >{n}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const links = [
  { h: '/', n: 'Home' },
  { h: '/about', n: 'About' },
  { h: '/articles', n: 'Articles' },
];

export default Header;
