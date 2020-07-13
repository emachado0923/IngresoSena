import React, { Component } from 'react';
import { Title, SubTitle, Text } from '../../../Components/common/Texts';
import { CardRol } from '../../../Components/Cards/Cards';
import { faUserAlt, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import { Modal } from 'react-bootstrap';
import Visitante from '../../../Components/Forms/Visitante';
import Aprendiz from '../../../Components/Forms/Aprendiz';
import Funcionario from '../../../Components/Forms/Funcionario';
import { ButtonIcon } from '../../../Components/common/Button';
import './estilos.css';
import NavTopInicio from '../../../Components/Navs/NavInicioSesion/NavTopInicio';
import { Footer } from '../../../Components/Footer/Footer';


class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rol: '',
            openModal: false,
        }
    }
    render() {
        return (
            <div className='containerGeneral'>
                <NavTopInicio />
                <div className='container'>
                    <Title title='SENA ME CUIDA' />
                    <SubTitle title='Para ingresar selecciona tu cargo en el Sena' />
                    <div className='contCards'>
                        <CardRol title='Soy Administrador' bgColor='#00A7AF' icon={faUserAlt} onClick={() =>  window.location.href="/Login"} />
                        <CardRol title='Seguridad' bgColor='#707070' icon={faUserTie} onClick={() => window.location.href="/LoginSeguridad"} />
                    </div>
                    <Modal show={this.state.openModal} className='widthModal'>
                        <Modal.Header>
                            <Modal.Title>
                                <Title title='FORMULARIO DE REGISTRO' />
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                this.state.rol === 'Visitante' ?
                                    <Visitante /> :
                                    this.state.rol === 'Funcionario' ?
                                        <Funcionario /> :
                                        <Aprendiz />
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            <ButtonIcon bgColor='#e74c3c' title='Cerrar' onClick={() => { this.setState({ openModal: false }) }} />
                            {/* <ButtonIcon bgColor='#00A7AF' title='Registrarse' /> */}
                        </Modal.Footer>
                    </Modal>


                </div>
                <Footer />
            </div>
        )
    }
}


export default Inicio