import { Link } from 'react-router-dom'
import Image from '../images/hero-bg.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1>Transform Your Business with <span>SASOM </span>IT Services</h1>
          <p>Empower Your Business Growth and Efficiency with SASOM IT Services: Unleash the Potential of Technology to Drive Success</p>
          <Link to='/plans' className='btn lg'>Start a Project</Link>
          <Link to='/plans' className='btn variant'>Learn More</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader