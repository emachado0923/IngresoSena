import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faUsers, faBars } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import { Search } from '../common/Inputs';
import LogoSena from '../../Assets/image/logo/LogoSena.png';
import './estilos.css';
import { Link } from 'react-router-dom';

const NavAdmin = ({ }) => {
    return (
        <div className='containerNavAdmin'>
            <div className='adminTop'>
                <div className='txt'>
                    <h2>SENA ME CUIDA</h2>
                    <Dropdown className='contIconNavTop'>
                        <Dropdown.Toggle variant="outline-light" className='iconNavTop'>
                            <FontAwesomeIcon icon={faBars} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><Link to='/Admin1'>Inicio</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/'>Usuarios</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
                    <img src={LogoSena} alt="" />
                </div>
                <div className='menu'>
                    <ul>
                        <Link to='/Admin'>
                            <li>
                                <FontAwesomeIcon icon={faHome} />
                                <h3>Inicio</h3>
                            </li>
                        </Link>
                        <Link to='/'>
                            <li>
                                <FontAwesomeIcon icon={faUsers} />
                                <h3>Usuarios</h3>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavAdmin;