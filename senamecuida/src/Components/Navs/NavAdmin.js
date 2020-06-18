import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../common/Inputs';
import './estilos.css';

const NavAdmin = ({ }) => {
    return (
        <div className='containerNavAdmin'>
            <div className='adminTop'>
                <div className='txt'>
                    <h3>SENA ME CUIDA</h3>
                </div>
                <div className='contRight'>
                    <div className='search'>
                        <Input></Input>
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