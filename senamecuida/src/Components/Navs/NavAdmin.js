import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faUsers,faBars} from '@fortawesome/free-solid-svg-icons'
import { Search } from '../common/Inputs';
import LogoSena from '../../Assets/image/logo/LogoSena.png';
import './estilos.css';

const NavAdmin = ({ }) => {
    return (
        <div className='containerNavAdmin'>
            <div className='adminTop'>
                <div className='txt'>
                    <h2>SENA ME CUIDA</h2>
                    <FontAwesomeIcon icon={faBars} className='iconNavTop'/>
                </div>
                <div className='contRight'>
                    <div className='search'>
                        <Search placeholder='Burcar...'></Search>
                    </div>
                    <div className='iconAdmin'>
                        <FontAwesomeIcon icon={faUserCircle} />
                    </div>
                </div>
            </div>
            <div className='adminLateral'>
                <div className='logo'>
                    <img src={LogoSena} alt=""/>
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            <h3>Home</h3>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUsers} />
                            <h3>Usuarios</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavAdmin;