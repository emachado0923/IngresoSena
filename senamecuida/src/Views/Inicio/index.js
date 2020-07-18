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
import foto1 from '../../Assets/image/iconos/LogoSena.png';


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
                <div class='fondo'>               
                 <div className='container'>
                    <Title title='SENA ME CUIDA' />
                    <SubTitle title='Para registrarte selecciona tu cargo en el Sena' />

                    <div class='contCards'>
                    <div>
                        <CardRol  bgColor='#78BECE'   onClick={() => { this.setState({ openModal: true, rol: 'Visitante' }) }} />
                         <img className='foto1' src={foto1} onClick={() => { this.setState({ openModal: true, rol: 'Visitante' }) }}/>

                         <div id="cardf" onClick={() => { this.setState({ openModal: true, rol: 'Visitante' }) }}>Visitante</div>
                   </div>
                       
                       <div>
                        <CardRol  bgColor='#707070'  onClick={() => { this.setState({ openModal: true, rol: 'Funcionario' }) }} />
                        <img className='foto1' src={foto1} onClick={() => { this.setState({ openModal: true, rol: 'Funcionario' }) }}  />

                         <div id="cardf2"onClick={() => { this.setState({ openModal: true, rol: 'Funcionario' }) }}>funcionario</div>
                   </div>

                   <div>
                        <CardRol  bgColor='#006164'  onClick={() => { this.setState({ openModal: true, rol: 'Aprendiz' }) }} />
                        <img className='foto1' src={foto1} onClick={() => { this.setState({ openModal: true, rol: 'Aprendiz' }) }} />
                         <div id="cardf3" onClick={() => { this.setState({ openModal: true, rol: 'Aprendiz' }) }}>Aprendiz</div>
                   </div>

                        
                        
                    </div>
                    <div className='contText'>
                        <Text
                            align='center'
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
 type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
 with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />

                        </div></div>
                    <Modal show={this.state.openModal} className='widthModal'>

                        <Modal.Header>
                        
                            <Modal.Title>

                                <Title title='FORMULARIO  DE  REGISTRO' />
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