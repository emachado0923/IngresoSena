import React from 'react';
import './estilos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ButtonIcon = ({ title, icon, onClick, bgColor }) => {
    return (
            <button className='button' onClick={onClick} style={{background: bgColor}}>
                <FontAwesomeIcon className='icono' icon={icon} />
                {title}
            </button>
    )
}
const ButtonIconA = ({ title, icon, href, bgColor }) => {
    return (
            <button className='buttonA' style={{background: bgColor}}>
                <a href={href}>
                <FontAwesomeIcon className='icono' icon={icon} />
                {title}
                </a>
            </button>
    )
}

export {ButtonIcon, ButtonIconA};