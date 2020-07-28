import React from 'react';
import './estilos.css';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import {Form, Container, Row, Col, Button} from 'react-bootstrap'
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';


// import { Input } from '../../common/Inputs';
// import { ButtonIcon } from '../../../Components/common/Button';


const Visitante = () => {

    const [fiebre, setFiebre] = React.useState(false)
    const [dolorTragar, setDolorTragar] = React.useState(false)
    const [Tos, setTos] = React.useState(false)
    const [dificultadRespirar, setDificultadRespirar] = React.useState(false)
    const [malestargeneral, setMalestarGeneral] = React.useState(false)
    const [gripa, setGripa] = React.useState(false)
    const [diarrea, setDiarrea] = React.useState(false)
    const [contacto, setContacto] = React.useState(false)
    const [tratamiento, setTratamiento] = React.useState(false)
    const [documentoIdentidad, setDocumentoIdentidad] = React.useState('')

    const handleDocumentoIdentidadChange = (event) => setDocumentoIdentidad(event.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        let valores = [
            fiebre,
            dolorTragar,
            Tos,
            dificultadRespirar,
            malestargeneral,
            gripa,
            diarrea,
            contacto,
            tratamiento,
        ]

        const sintomas = valores.reduce(
            (out, bool, index) => bool ? out.concat(index) : out,
            []
        )

        let Fiebre = document.getElementsByName('fiebre')
        let S_Fiebre = false
        for (let i = 0; i < Fiebre.length; i++) {
            if (Fiebre[i].checked) {
                S_Fiebre = true
                break;
            }
        }

        let Dolor = document.getElementsByName('dolorTragar')
        let S_Dolor = false
        for (let i = 0; i < Dolor.length; i++) {
            if (Dolor[i].checked) {
                S_Dolor = true
                break;
            }
        }

        let TOS = document.getElementsByName('Tos')
        let S_TOS = false
        for (let i = 0; i < TOS.length; i++) {
            if (TOS[i].checked) {
                S_TOS = true
                break;
            }
        }

        let Difcultad = document.getElementsByName('dificultadRespirar')
        let S_Difcultad = false
        for (let i = 0; i < Difcultad.length; i++) {
            if (TOS[i].checked) {
                S_Difcultad = true
                break;
            }
        }

        let Malestar = document.getElementsByName('malestargeneral')
        let S_Malestar = false
        for (let i = 0; i < Malestar.length; i++) {
            if (Malestar[i].checked) {
                S_Malestar = true
                break;
            }
        }

        let Gripa = document.getElementsByName('gripa')
        let S_Gripa = false
        for (let i = 0; i < Gripa.length; i++) {
            if (Gripa[i].checked) {
                S_Gripa = true
                break;
            }
        }

        let Diarrea = document.getElementsByName('diarrea')
        let S_Diarrea = false
        for (let i = 0; i < Diarrea.length; i++) {
            if (Diarrea[i].checked) {
                S_Diarrea = true
                break;
            }
        }

        let Contacto = document.getElementsByName('contacto')
        let S_Contacto = false
        for (let i = 0; i < Contacto.length; i++) {
            if (Contacto[i].checked) {
                S_Contacto = true
                break;
            }
        }

        let Tratamiento = document.getElementsByName('tratamiento')
        let S_Tratamiento = false
        for (let i = 0; i < Tratamiento.length; i++) {
            if (Tratamiento[i].checked) {
                S_Tratamiento = true
                break;
            }
        }


        if (S_Fiebre && S_Dolor && S_TOS && S_Difcultad && S_Malestar && S_Gripa && S_Diarrea && S_Contacto && S_Tratamiento) {
            if (sintomas.length >= 3) {
                fetch(`${process.env.REACT_APP_API_URL}/api/visitante/ingreso`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({documentoIdentidad})
                })
                    .then(function (result) {
                        if (result['ok'] === true) {
                            console.log(result);
                            result.json()
                                .then(async function (data) {
                                    await fetch(`${process.env.REACT_APP_API_URL}/api/noIngresoDia/create`, {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',

                                        },
                                        body: JSON.stringify(data)
                                    }).then(function (result) {
                                        if (result['ok'] === false) {
                                            Swal.fire({
                                                icon: 'error',
                                                title: '¡ERROR!',
                                                text: JSON.stringify('¡NO LO SE!'),
                                                timer: 10500
                                            })
                                        } else {
                                            Swal.fire({
                                                icon: 'error',
                                                title: '¡ACCESO DENEGADO!',
                                                text: 'No puede pasar!',
                                                timer: 10500
                                            })
                                        }
                                    })
                                })
                        } else {
                            result.text().then(function (data) {
                                Swal.fire({
                                    icon: 'error',
                                    title: '¡ERROR!',
                                    text: data,
                                    timer: 10500
                                })
                            })
                        }

                    })
            } else {
                fetch(`${process.env.REACT_APP_API_URL}/api/visitante/ingreso`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({documentoIdentidad})
                })
                    .then(function (result) {
                        if (result['ok'] === true) {
                            console.log(result);
                            result.json()
                                .then(async function (data) {
                                    await fetch(`${process.env.REACT_APP_API_URL}/api/estadoVisitante/create`, {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',

                                        },
                                        body: JSON.stringify(data)
                                    }).then(function (result) {
                                        if (result['ok'] === false) {
                                            Swal.fire({
                                                icon: 'error',
                                                title: '¡ERROR!',
                                                text: JSON.stringify('¡ESTE USUARIO YA SE ENCUENTRA DE ALTA EN EL APLICATIVO!'),
                                                timer: 10500
                                            })
                                        } else {
                                            Swal.fire({
                                                icon: 'success',
                                                title: '¡BIEN, ACCESO APROBADO!',
                                                text: JSON.stringify(`Bienvenido ${data.nombre} con EPS ${data.eps}`),
                                                timer: 10500
                                            })
                                        }
                                    })
                                })
                        } else {
                            result.text().then(function (data) {
                                Swal.fire({
                                    icon: 'error',
                                    title: '¡ERROR!',
                                    text: data,
                                    timer: 10500
                                })
                            })
                        }

                    })
                    .catch(function (error) {
                        console.log(error)
                        /*Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error,
                        timer: 1500
                    })*/
                    });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error!.',
                text: 'Debe seleccionar todos las opciones!.',
                timer: 1500
            })
            return false
        }

    }


    return (
        <div className='containerForm'>
            <TextField
                value={documentoIdentidad}
                onChange={handleDocumentoIdentidadChange}
                required
                name="documentoIdentidad"
                id='documentoIdentidad'
                type='number'
                label='Documento de Identidad'
                placeholder='Ingresa el documento de identidad'
                variant='outlined'
            />
            <div>
                <div className="card-body">
                    <Container>
                        <h3>Presenta algunos de estos síntomas?</h3>
                        <hr/>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Label>
                                        <strong>Fiebre?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio" onChange={e => setFiebre(e.target.value = true)}
                                                value={fiebre} name={'fiebre'} label={'Si'}/>
                                    <Form.Check type="radio" onChange={e => setFiebre(e.target.value = false)}
                                                value={fiebre} name={'fiebre'} label={'No'}/>
                                </Col>
                                <Col>
                                    <Form.Label>
                                        <strong>Tos?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio" onChange={e => setTos(e.target.value = true)}
                                                value={Tos} name={'Tos'} label={'Si'}/>
                                    <Form.Check type="radio" onChange={e => setTos(e.target.value = false)}
                                                value={Tos} name={'Tos'} label={'No'}/>
                                </Col>
                                <Col>
                                    <Form.Label>
                                        <strong>Dolor al tragar?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio" onChange={e => setDolorTragar(e.target.value = true)}
                                                value={dolorTragar} name={'dolorTragar'} label={'Si'}/>
                                    <Form.Check type="radio" onChange={e => setDolorTragar(e.target.value = false)}
                                                value={dolorTragar} name={'dolorTragar'} label={'No'}/>
                                </Col>
                            </Row>

                            <hr/>

                            <Row>
                                <Col>
                                    <Form.Label>
                                        <strong>Malestar general?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio" onChange={e => setMalestarGeneral(e.target.value = true)}
                                                value={malestargeneral} name={'malestargeneral'} label={'Si'}/>
                                    <Form.Check type="radio" onChange={e => setMalestarGeneral(e.target.value = false)}
                                                value={malestargeneral} name={'malestargeneral'} label={'No'}/>
                                </Col>
                                <Col>
                                    <Form.Label>
                                        <strong>Dificultad para respirar?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio"
                                                onChange={e => setDificultadRespirar(e.target.value = true)}
                                                value={dificultadRespirar} name={'dificultadRespirar'} label={'Si'}/>
                                    <Form.Check type="radio"
                                                onChange={e => setDificultadRespirar(e.target.value = false)}
                                                value={dificultadRespirar} name={'dificultadRespirar'} label={'No'}/>

                                </Col>
                                <Col>
                                    <Form.Label>
                                        <strong>Gripa?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio" onChange={e => setGripa(e.target.value = true)}
                                                value={gripa} name={'gripa'} label={'Si'}/>
                                    <Form.Check type="radio" onChange={e => setGripa(e.target.value = false)}
                                                value={gripa} name={'gripa'} label={'No'}/>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <Form.Label>
                                        <strong>Diarrea?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio" onChange={e => setDiarrea(e.target.value = true)}
                                                value={diarrea} name={'diarrea'} label={'Si'}/>
                                    <Form.Check type="radio" onChange={e => setDiarrea(e.target.value = false)}
                                                value={diarrea} name={'diarrea'} label={'No'}/>
                                </Col>
                                <Col>
                                    <Form.Label>
                                        <strong>A tenido contacto con casos sospechosos o confirmados?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio" onChange={e => setContacto(e.target.value = true)}
                                                value={contacto} name={'contacto'} label={'Si'}/>
                                    <Form.Check type="radio" onChange={e => setContacto(e.target.value = false)}
                                                value={contacto} name={'contacto'} label={'No'}/>

                                </Col>
                                <Col>
                                    <Form.Label>
                                        <strong>Dolor articular - Sensacion de cansancio?</strong>
                                    </Form.Label>
                                    <Form.Check type="radio" onChange={e => setTratamiento(e.target.value = true)}
                                                value={tratamiento} name={'tratamiento'} label={'Si'}/>
                                    <Form.Check type="radio" onChange={e => setTratamiento(e.target.value = false)}
                                                value={tratamiento} name={'tratamiento'} label={'No'}/>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col md={{span: 10, offset: 1}}>
                                    <Button
                                        variant="outline-secondary"
                                        size="lg" block
                                        type="submit">
                                        Verificar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Visitante;
