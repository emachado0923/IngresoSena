import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Search } from '../common/Inputs';
import './estilos.css';

const NavAdmin = ({ }) => {
    return (
        <div className='containerNavAdmin'>
            <div className='adminTop'>
                <div className='txt'>
                    SENA ME CUIDA
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

            </div>
        </div>
    )
}

export default NavAdmin;