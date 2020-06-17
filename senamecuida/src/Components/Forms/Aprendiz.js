import React from 'react';
import { Input, Select } from '../common/Inputs';
import './estilos.css';

const Aprendiz = () => {
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
            <Input
                id='tel1'
                label='Número de teléfono'
                placeholder='Ingresa tu número de teléfono'
            />
            <Input
                id='tel2'
                label='Número de teléfono de un familiar'
                placeholder='Ingresa número de teléfono'
            />
            <Input
                id='direccion'
                label='Dirección'
                placeholder='Ingresa tu dirección de residencia'
            />
            <Input
                id='eps'
                label='EPS'
                placeholder='Ingresa tu EPS'
            />
            <Input
                id='ficha'
                label='Número de ficha'
                placeholder='Ingresa tu número de ficha'
            />
            <Input
                id='programa'
                label='Programa de formación'
                placeholder='Ingresa tu programa de formación'
            />
        </div>
    )
}

export default Aprendiz;