import React, { Component } from 'react';
import './estilos.css';
import NavSeguridad from '../../Components/Navs/NavSeguridad/NavSeguridad';

import Table from '../../Components/Table/Table';
//import { Card, CardInfo } from '../../Components/Cards/Cards';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import { CardRol } from '../../Components/Cards/Cards';
import { faUserAlt, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Title, SubTitle, Text } from '../../Components/common/Texts';
import { ButtonIcon } from '../../Components/common/Button';

import Visitante from '../../Components/Forms/Ingreso/IngresoVisitante';
import Aprendiz from '../../Components/Forms/Ingreso/IngresoAprendiz';
import Funcionario from '../../Components/Forms/Ingreso/IngresoFuncionario';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rol: '',
            openModal: false,
        }
    }
    render() {
        return (
            <div className='containerSeguridad'>
                <NavSeguridad></NavSeguridad>
                <Title title='SEGURIDAD' />
                <div className='contSeguridad'>
                    <div className='container'>
                            <SubTitle title='Para ingresar selecciona tu cargo en el Sena' />
                            <div className='contCards'>
                                <CardRol title='Soy Visitante' bgColor='#00A7AF' icon={faUserAlt} onClick={() => { this.setState({ openModal: true, rol: 'Visitante' }) }} />
                                <CardRol title='Soy funcionario' bgColor='#707070' icon={faUserTie} onClick={() => { this.setState({ openModal: true, rol: 'Funcionario' }) }} />
                                <CardRol title='Soy Aprendiz' bgColor='#707070' icon={faUserTie} onClick={() => { this.setState({ openModal: true, rol: 'Aprendiz' }) }} />
                            </div>
                            <Modal show={this.state.openModal} className='widthModal'>
                                <Modal.Header>
                                    <Modal.Title>
                                        <Title title='VALIDADOR DE INGRESO' />
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
                </div>
            </div>
        )
    }
}

export default Admin