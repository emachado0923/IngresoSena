import React, { Component } from 'react';
import { Title } from '../../../Components/common/Texts';
import { Input } from '../../../Components/common/Inputs';
import { Button } from '../../../Components/common/Button';
import './estilos.css'

class Login extends Component {
    render() {
        return (
            <div className='containerLogin'>
                <div className='contLogin'>
                    <Title title='INGRESO ADMINISTRACIÓN' />
                    <div className='form'>
                        <Input
                            id='usuario'
                            label='Usuario'
                            placeholder='Ingresa tu usuario'
                        />
                        <Input
                            id='password'
                            label='Contraseña'
                            placeholder='Ingresa tu contraseña'
                        />
                        <div className='contBtns'>
                            <Button title='Ingresar' bgColor='#5EB318' />
                            <Button title='Registrarse' bgColor='#00A7AF' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Login)