import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-prop">
    <div className="logo-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-prop"
      />
      <p>Wave</p>
    </div>
    <ul className="options-cont">
      <li>
        <Link to="/" className="name">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="name">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="name">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
