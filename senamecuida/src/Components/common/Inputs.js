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
const Select = ({ label, id, value, type, required, onChage }) => {
    return (
        <div className='contSelect'>
            <label htmlFor={id}>{label}</label>
            <select id={id} value={value}>

            </select>
        </div>
    )
}
export { Input, Select }