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

const Select = ({ label, id, value, value1,value2,option1,option2 }) => {
    return (
        <div className='contSelect'>
            <label htmlFor={id}>{label}</label>
            <select id={id} value={value}>
                <option value={value1}>{option1}</option>
                <option value={value2}>{option2}</option>
            </select>
        </div>
    )
}



export { Input, Select }