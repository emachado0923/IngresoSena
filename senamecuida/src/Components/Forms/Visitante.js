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
                id='nombre'
                label='Nombre completo'
                placeholder='Ingresa tu nombre completo'
            />
            <Input
                id='nombre'
                label='Nombre completo'
                placeholder='Ingresa tu nombre completo'
            />
            <Select label='Tipo de documento' value='Selecciona el tipo de documento'>
                <option value="Cedula">Celular</option>
                <option value="Cedula">Celular</option>

            </Select>
        </div>
    )
}

export default Visitante;