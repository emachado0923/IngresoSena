import React from 'react';
import './estilos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ButtonIcon = ({ title, icon, onClick }) => {
    return (
            <button className='button' onClick={onClick}>
                <FontAwesomeIcon className='icono' icon={icon} />
                {title}
            </button>
    )
}

export default ButtonIcon;