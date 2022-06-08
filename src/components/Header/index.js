import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGear, faBell } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png'
import user from '../../assets/user.jpg'
import './style.scss'



const Header = () => {
return  <header className="Header d-flex align-items-center justify-content-between" >
             <div className='d-flex align-items-center'>
                <img src={logo} className="logo" alt="logo" />
                <span className='logoTitle'>FanAware</span>
             </div>
             <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faGear} />
                <FontAwesomeIcon icon={faBell} />
                <div className='d-flex align-items-center'>
                  <img src={user} className="user" alt="user" />
                  <div className='d-flex flex-column'>
                          <span  className='firstName'>Paolo</span>
                          <span className='lastName'>Bergantino</span>
                  </div>
                </div>
             </div>
        </header>
};

export default Header;