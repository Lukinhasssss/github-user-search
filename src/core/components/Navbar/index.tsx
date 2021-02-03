import { Link } from 'react-router-dom'

import './styles.css'

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo-text">Bootcamp DevSuperior</Link>
      </div>
    </nav>
  )
}

export default Navbar