import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <span className="copyright design">
        &copy; 2021 <Link to="/">Munif</Link>
      </span>
      <ul className="social">
        {links.map(({ h, n }) => (
          <li key={n}>
            <a href={h} target="_blank">
              <i className={`fab fa-${n}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

const links = [
  { h: 'https://github.com/MuhammadMunif361', n: 'github' },
  { h: 'https://facebook.com/muhammad.munif.505523', n: 'facebook' },
  { h: 'https://twitter.com/muhammad__munif', n: 'twitter' },
  { h: 'https://instagram.com/muhammad01munif', n: 'instagram' },
];

export default Footer;
