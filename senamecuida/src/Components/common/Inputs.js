import React from 'react';
import './estilos.css';

const Input = ({ label, id, placeholder, type, required, onChage }) => {
    return (
        <div className='contInput'>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                placeholder={placeholder}
                type={type}
                required={required}
                onChange={onChage}
            />
        </div>
    )
}
export { Input }