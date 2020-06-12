import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './estilos.css';


const CardRol = ({ title, icon, bgColor }) => {
    return (
        <div className='card' style={{background: bgColor }}>
            <FontAwesomeIcon icon={icon} />
            <h5>{title}</h5>
        </div>

    )
}

export { CardRol };