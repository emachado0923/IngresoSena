import React, { Component } from 'react';
import { Title, SubTitle, Text } from '../../Components/common/Texts';
import { CardRol } from '../../Components/Cards/Cards';
import { faUserAlt, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import { Modal } from 'react-bootstrap';
import Visitante from '../../Components/Forms/Visitante';
import Aprendiz from '../../Components/Forms/Aprendiz';
import Funcionario from '../../Components/Forms/Funcionario';
import { ButtonIcon } from '../../Components/common/Button';
import './estilos.css';
import NavTopLanding from '../../Components/Navs/navTopLanding';
import { Footer } from '../../Components/Footer/Footer';


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
                <NavTopLanding />
                <div className='container'>
                    <Title title='SENA ME CUIDA' />
                    <SubTitle title='Para registrarte selecciona tu cargo en el Sena' />
                    <div className='contCards'>
                        <CardRol title='Soy visitante' bgColor='#00A7AF' icon={faUserAlt} onClick={() => { this.setState({ openModal: true, rol: 'Visitante' }) }} />
                        <CardRol title='Soy funcionario' bgColor='#707070' icon={faUserTie} onClick={() => { this.setState({ openModal: true, rol: 'Funcionario' }) }} />
                        <CardRol title='Soy Aprendiz' bgColor='#006164' icon={faUserGraduate} onClick={() => { this.setState({ openModal: true, rol: 'Aprendiz' }) }} />
                    </div>
                    <div className='contText'>
                        <Text
                            align='center'
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
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