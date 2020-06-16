import React, { Component } from 'react';
import { Title, SubTitle, Text } from '../../Components/common/Texts';
import { CardRol } from '../../Components/Cards/Card';
import { faUserAlt, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import { Modal, Button, } from 'react-bootstrap'
import './estilos.css'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">

                    <Title title='Registro' />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
          </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Inicio() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='container'>
            <Title title='SENA ME CUIDA' />
            <SubTitle title='Para registrarte selecciona tu cargo en el Sena' />
            <div className='contCards'>
                <CardRol title='Soy visitante' bgColor='#00A7AF' icon={faUserAlt} onClick={() => setModalShow(true)} />
                <CardRol title='Soy funcionario' bgColor='#707070' icon={faUserTie} onClick={() => setModalShow(true)} />
                <CardRol title='Soy Aprendiz' bgColor='#006164' icon={faUserGraduate} onClick={() => setModalShow(true)} />
            </div>
            <div className='contText'>
                <Text
                    align='center'
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}
export default Inicio






// class Inicio extends Component {
//     render() {
//         return (
//             <div className='container'>
//                 <Title title='SENA ME CUIDA' />
//                 <SubTitle title='Para registrarte selecciona tu cargo en el Sena' />
//                 <div className='contCards'>
//                     <CardRol title='Soy visitante' bgColor='#00A7AF' icon={faUserAlt} />
//                     <CardRol title='Soy funcionario' bgColor='#707070' icon={faUserTie} />
//                     <CardRol title='Soy Aprendiz' bgColor='#006164' icon={faUserGraduate} />
//                 </div>
//                 <div className='contText'>
//                     <Text
//                         align='center'
//                         text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//                     />
//                 </div>

//             </div>
//         )
//     }
// }


// export default Inicio