import React from 'react';
import Button from '../common/Button';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Assets/image/logo/LogoSena.png';
import './estilos.css';

const NavTopLanding = ({})=>{
    return(
        <div className='containerNav'>
            <div className='Logo'>
                <img src={Logo} alt=""/>
            </div>
            <Button title='INGRESAR' icon={faUserCircle}/>
        </div>
    )
}

export default NavTopLanding;