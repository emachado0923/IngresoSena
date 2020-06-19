import React, { Component } from 'react';
import { Title } from '../../../Components/common/Texts';
import { Input } from '../../../Components/common/Inputs';
import { Button } from '../../../Components/common/Button';
import Logo from '../../../Assets/image/logo/LogoSenaNaranja.png'
import './estilos.css'

class Login extends Component {
    render() {
        return (
            <div className='containerLogin'>
                <div className='contLogin'>
                    <div className='logoLogin'>
                        <img src={Logo} alt=""/>
                    </div>
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
                            type='password'
                        />
                        <div className='contBtns'>
                            <Button title='Ingresar' bgColor='#FF6D00' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Login)