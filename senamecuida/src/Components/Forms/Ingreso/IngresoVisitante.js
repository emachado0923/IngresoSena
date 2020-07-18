import React from 'react';
import './estilos.css';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Form, Container, Row, Col, Alert, Button} from 'react-bootstrap'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


import { Input } from '../../common/Inputs';
import { ButtonIcon } from '../../../Components/common/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Visitante = () => {

    const classes = useStyles();
    const moment = require('moment-timezone');

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

        if (sintomas.length >= 3) {
            Swal.fire({
                icon: 'error',
                title: '¡ACCESO DENEGADO!',
                text: 'No puede pasar!',
                timer: 10500
            })
        } else {
            fetch('http://localhost:3008/api/visitante/ingreso', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },  
                body: JSON.stringify({documentoIdentidad})
                })
                .then(function (result) {
                if(result['ok'] === true){    
                    console.log(result);
                    result.json()
                    .then(async function(data) {
                        await fetch('http://localhost:3008/api/estado/create', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            
                        },  
                        body: JSON.stringify(data)
                        }).then(function (result) {
                            if(result['ok'] === false){
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
                }
                else{
                    result.text().then(function(data) { 
                        Swal.fire({
                        icon: 'error',
                        title: '¡ERROR!',
                        text: data,
                        timer: 10500
                    })
                    })
                    }
                    
                })
                .catch (function (error) {
                console.log(error)
                    /*Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                    timer: 1500
                })*/
                });
        }
    }
    
    async function registro() {
        
        }
        

    return (
        <div className='containerForm'>
            <TextField
                value={documentoIdentidad}
                className="contInput"
                onChange={handleDocumentoIdentidadChange}
                required
                name="documentoIdentidad"
                id='documentoIdentidad'
                type='number'
                label='Documento de Identidad'
                placeholder='Ingresa el documento de identidad'
            />
            <div>
            <div className="card-body">
                <Container>
                    <h3>Presenta algunos de estos sintomas sintomas?</h3>
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
                                <Form.Check type="radio" onChange={e => setDificultadRespirar(e.target.value = true)}
                                            value={dificultadRespirar} name={'dificultadRespirar'} label={'Si'}/>
                                <Form.Check type="radio" onChange={e => setDificultadRespirar(e.target.value = false)}
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
                                    <strong>Se encuentra en tratamiento por enfermedad actual?</strong>
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