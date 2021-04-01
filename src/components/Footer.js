import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <span className='copyright design'>
        &copy; 2021 <Link to='/'>Munif</Link>
      </span>
      <ul className='social'>
        {links.map(([h, n]) => (
          <li key={n}>
            <a href={h} target='_blank'>
              <i className={`fab fa-${n}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

const links = [
  ['https://github.com/MuhammadMunif361', 'github'],
  ['https://facebook.com/I.am.Munif', 'facebook'],
  ['https://twitter.com/muhammad__munif', 'twitter'],
  ['https://instagram.com/muhammad01munif', 'instagram'],
]

export default Footer
