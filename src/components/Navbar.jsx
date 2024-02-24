import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import { links } from '../data'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import './navbar.css'


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className="logo" onClick={() => setIsNavShowing(false)}>
          <h3 className='logo'>Sasom</h3>
          {/* <img src={Logo} alt="Nav Logo" /> */}
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({ path, name }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
              )
            })

          }
          <Link className='btn variant contact__link'>Contact Us</Link>
          <Link className='btn lg contact__link'>Request Info</Link>
        </ul>

        <button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar