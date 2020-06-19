import React, { Component } from 'react';
import { Title } from '../../../Components/common/Texts';
import { Input } from '../../../Components/common/Inputs';
import { Button } from '../../../Components/common/Button';
import Logo from '../../../Assets/image/logo/LogoSenaNaranja.png'
import './estilos.css'
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            press: false,
        }
    }
    Auth() {
        window.location.href = "/Admin";
    }

    render() {
        return (
            <div className='containerLogin'>
                <div className='contLogin'>
                    <div className='logoLogin'>
                        <img src={Logo} alt="" />
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
                            <Button title='Ingresar' bgColor='#FF6D00' onClick={this.Auth.bind(this)} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default (Login)