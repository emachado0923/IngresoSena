import React, { Component, useState } from 'react';
import { Input } from '../../../Components/common/Inputs';
import { Button } from '../../../Components/common/Button';
import Logo from '../../../Assets/image/logo/LogoSenaNaranja.png'
import './estilos.css'
import Swal from 'sweetalert2';
import swal from 'bootstrap-sweetalert';


function Login() {
    // Auth() {
    //     window.location.href = "/Admin";
    // }

        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')

        const handleUsernameChange = (event) => setUsername(event.target.value)
        const handlePasswordChange = (event) => setPassword(event.target.value)

        async function login() {
            await fetch('http://localhost:3008/api/administrador/login-admin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
            })
            .then(function (result) {
            if(result['ok'] === true){
                result.text().then(function(data) {
                localStorage.setItem('token', data)
                swal({
                    title: "Success!",
                    text: "Redirecting in 2 seconds.",
                    type: "success",
                    timer: 2000,
                    showConfirmButton: false
                }, function(){
                        window.location.href = "/Admin";
                });
                })

                }
                else{
                result.text().then(function(data) { 
                    Swal.fire({
                    icon: 'error',
                    title: '¡ERROR!',
                    text: data,
                    timer: 3500
                })
                })
                }
            }).catch (function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
                timer: 3500
            })
            });
        }

    return (
        <div className='containerLogin'>
            <div className='contLogin'>
                <div className='logoLogin'>
                    <img src={Logo} alt="" />
                </div>
                <div className='form'>
                    <Input
                        value={username}
                        onChage={handleUsernameChange}
                        id='usuario'
                        label='Usuario'
                        placeholder='Ingresa tu usuario'
                    />
                    <Input
                        value={password}
                        onChage={handlePasswordChange}
                        id='password'
                        label='Contraseña'
                        placeholder='Ingresa tu contraseña'
                        type='password'
                    />
                    <div className='contBtns'>
                        <Button title='Ingresar' bgColor='#FF6D00' onClick={() => login()} />
                        <Button title='Volver a Inicio' bgColor='#707070' onClick={() => window.location.href="/"} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default (Login)