import React from 'react';
import { Input, Select } from '../common/Inputs';
import './estilos.css';

const Visitante = () => {
    return (
        <div className='containerForm'>
            <Input
                id='nombre'
                label='Nombre completo'
                placeholder='Ingresa tu nombre completo'
            />
            <Input
                id='correo'
                label='Correo electrónico'
                placeholder='Ingresa tu correo'
            />
            <Select label='Tipo de documento'
                id='selectTipo'
                option1='Cedula de ciudadania'
                value1='Cedula'
                option2='Tarjeta de identidad'
                value2='Tarjeta'
            />
            <Input
                id='numeroId'
                label='Número de documento'
                placeholder='Ingresa tu número de documento'
            />
        </div>
    )
}

export default Visitante;