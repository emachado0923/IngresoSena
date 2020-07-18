import React, { Component } from 'react';
import './estilos.css';
import NavSeguridad from '../../Components/Navs/NavSeguridad/NavSeguridad';

import Table from '../../Components/Table/Table';
//import { Card, CardInfo } from '../../Components/Cards/Cards';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import { CardRol } from '../../Components/Cards/Cards';
import { faUserAlt, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Title, TitleIng, SubTitle, Text } from '../../Components/common/Texts';
import { ButtonIcon } from '../../Components/common/Button';

import Visitante from '../../Components/Forms/Salida/salidaVisitante';
import Aprendiz from '../../Components/Forms/Salida/salidaAprendiz';
import Funcionario from '../../Components/Forms/Salida/salidaFuncionario';
import foto1 from '../../Assets/image/iconos/LogoSena.png';


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
                <TitleIng titleing='VERIFICAR SALIDA' />
                <div class='fondo4'>
                    <div className='contSeguridad'>
                        <div className='container4' >
                        <SubTitle title='Para salir selecciona tu cargo en el Sena' />
                        <div className='contCards4'>
                            <div>
                                <CardRol  bgColor='#78BECE' onClick = {() => { this.setState({ openModal: true, rol: 'Visitante' }) } }/>
                                <img className='foto1' src={foto1} onClick = {() => { this.setState({ openModal: true, rol: 'Visitante' }) } }/>
                                <div id="cardf"onClick = {() => { this.setState({ openModal: true, rol: 'Visitante' }) } }>Visitante</div>
                            </div>

                            <div>
                                <CardRol  bgColor='#707070'  onClick = {() => { this.setState({ openModal: true, rol: 'Funcionario' }) } }/>
                                <img className='foto1' src={foto1} onClick = {() => { this.setState({ openModal: true, rol: 'Funcionario' }) } }/>
                                <div id="cardf2"onClick = {() => { this.setState({ openModal: true, rol: 'Funcionario' }) } }>funcionario</div>
                            </div>
                            <div>
                                <CardRol  bgColor='#006164'  onClick = {() => { this.setState({ openModal: true, rol: 'Aprendiz' }) } }/>
                                <img className='foto1' src={foto1}  onClick = {() => { this.setState({ openModal: true, rol: 'Aprendiz' }) } }/>
                                <div id="cardf3"onClick = {() => { this.setState({ openModal: true, rol: 'Aprendiz' }) } }>Aprendiz</div>
                            </div> 
                        </div>
                        </div >
                        <Modal show = { this.state.openModal } className = 'widthModal' >
                            <Modal.Header >
                                <Modal.Title >
                                    <Title title = 'VALIDADOR DE SALIDA' />
                                </Modal.Title> 
                            </Modal.Header> 
                            <Modal.Body > 
                                {
                                    this.state.rol === 'Visitante' ?
                                    <Visitante /> :
                                    this.state.rol === 'Funcionario' ?
                                        <Funcionario /> :
                                        <Aprendiz />
                                }
                            </Modal.Body> 
                            <Modal.Footer >
                                <ButtonIcon bgColor = '#e74c3c'
                                title = 'Cerrar'
                                onClick = {() => { this.setState({ openModal: false }) } } /> 
                                { /* <ButtonIcon bgColor='#00A7AF' title='Registrarse' /> */ } 
                            </Modal.Footer> 
                        </Modal> 
                    </div> 
                </div>
            </div>
        )
    }
}

export default Admin