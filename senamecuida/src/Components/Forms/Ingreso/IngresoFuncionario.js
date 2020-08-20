import React, { useEffect } from 'react';
import './estilos.css';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import {Form, Container, Row, Col, Button} from 'react-bootstrap'
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';


// import { Input } from '../../common/Inputs';
import { ButtonIcon } from '../../../Components/common/Button';


const Aprendiz = () => {
        
    const [documentoIdentidad, setDocumentoIdentidad] = React.useState('')
    const [temperatura, setTemperatura] = React.useState('')
    const [cTemperatura, setCTemperatura] = React.useState(true)
    const [dataState, setDataState] = React.useState({})

    function prevent() {
        document.querySelector("#documentoIdentidad").addEventListener("keypress", function (evt) {
            if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        });
        var NID=  document.querySelector('#documentoIdentidad');
            NID.addEventListener('input',function(){
            if (this.value.length > 10) 
                this.value = this.value.slice(0,10); 
            })
        document.querySelector("#temperatura").addEventListener("keypress", function (evt) {
            if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        });
        var NID=  document.querySelector('#temperatura');
            NID.addEventListener('input',function(){
            if (this.value.length > 2) 
                this.value = this.value.slice(0,2);
            })
    }

    useEffect(() => {

        const callSearchService = () => {
        //   Api.search(value)
        //     .then(
        //       results => setResults(results),
        //       error => console.log(error)
        //     )
            console.log(documentoIdentidad);
        
            if (documentoIdentidad!== '') {
                registro()
            }
        }
      
        let consultarAPI = setTimeout(() => {
          callSearchService();
        }, 3000);
        
        // Se dispara cada vez que se re-renderiza el componente
        return () => {
          clearTimeout(consultarAPI);
        }
      }, [documentoIdentidad]);
    
    useEffect(() => {

        const callSearchService = () => {
        //   Api.search(value)
        //     .then(
        //       results => setResults(results),
        //       error => console.log(error)
        //     )
            console.log(documentoIdentidad);
        
            if (temperatura.length===2) {
                registroConTemperatura()
            }
        }
      
        let consultarAPI = setTimeout(() => {
          callSearchService();
        }, 3000);
        
        // Se dispara cada vez que se re-renderiza el componente
        return () => {
          clearTimeout(consultarAPI);
        }
      }, [temperatura]);


    const handleDocumentoIdentidadChange = (event) => setDocumentoIdentidad(event.target.value)
    const handleTemperaturaChange = (event) => setTemperatura(event.target.value)

    async function registro(){
        await fetch(`${process.env.REACT_APP_API_URL}/api/funcionario/ingreso`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({documentoIdentidad})
        })
        .then(function (result) {
            if (result['ok'] === true) {
                result.text().then(function(data) { 
                    Swal.fire({
                    icon: 'success',
                    title: '¡USUARIO ENCONTRADO!',
                    text: "AHORA DIGITA LA TEMPERATURA",
                    timer: 10500
                    })
                    setDataState(data);
                })
                setCTemperatura(false)
            } else {
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


        
        
        // // } else {
        // //     await fetch(`${process.env.REACT_APP_API_URL}/api/aprendiz/ingreso`, {
        // //         method: 'POST',
        // //         headers: {
        // //             'Accept': 'application/json',
        // //             'Content-Type': 'application/json',
        // //         },
        // //         body: JSON.stringify({documentoIdentidad})
        // //     }).then(function (result) {
        // //         if (result['ok'] === true) {
        // //             console.log(result);
        // //             result.json()
        // //                 .then(async function (data) {
        // //                     await fetch(`${process.env.REACT_APP_API_URL}/api/noIngresoDia/create`, {
        // //                         method: 'POST',
        // //                         headers: {
        // //                             'Accept': 'application/json',
        // //                             'Content-Type': 'application/json',

        // //                         },
        // //                         body: JSON.stringify(data)
        // //                     }).then(function (result) {
        // //                         if (result['ok'] === false) {
        // //                             Swal.fire({
        // //                                 icon: 'error',
        // //                                 title: '¡ERROR!',
        // //                                 text: JSON.stringify('¡NO LO SE!'),
        // //                                 timer: 10500
        // //                             })
        // //                         } else {
        // //                             Swal.fire({
        // //                                 icon: 'error',
        // //                                 title: '¡ACCESO DENEGADO!',
        // //                                 text: 'No puede pasar!',
        // //                                 timer: 10500
        // //                             })
        // //                         }
        // //                     })
        // //                 })
            
        // //             } else {
        // //                 result.text().then(function (data) {
        // //                     Swal.fire({
        // //                         icon: 'error',
        // //                         title: '¡ERROR!',
        // //                         text: data,
        // //                         timer: 10500
        // //                     })
        // //                 })
        // //             }

        // //         })
        // //         .catch(function (error) {
        // //             console.log(error)
        // //             /*Swal.fire({
        // //             icon: 'error',
        // //             title: 'Oops...',
        // //             text: error,
        // //             timer: 1500
        // //         })*/
        // //         });
        // }
    }


    async function registroConTemperatura(){
        

        let data = JSON.parse(dataState);
        const temp ={"temperatura":temperatura};

        data = {...data, ...temp};

        await fetch(`${process.env.REACT_APP_API_URL}/api/estadoFuncionario/create`, {
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
                setTimeout(() => {
                    window.location.reload();    
                }, 3000);
                
            } else {
                Swal.fire({
                    icon: 'success',
                    title: '¡BIEN!',
                    text: JSON.stringify(`Bienvenido ${data.nombre} con EPS ${data.eps}`),
                    timer: 10500
                })
                setTimeout(() => {
                    window.location.reload();    
                }, 3000);
            }
        })
        .catch(function (error) {
            console.log(error)
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
            timer: 1500
        })
        });
    }
    
    

    return (
        <div className='containerForm'>
            <TextField
                value={documentoIdentidad}
                onChange={handleDocumentoIdentidadChange}
                onKeyDown={prevent}
                required
                name="documentoIdentidad"
                id='documentoIdentidad'
                type='number'
                label='Documento de Identidad'
                placeholder='Ingresa el documento de identidad'
                variant='outlined'
            />
            <TextField
                value={temperatura}
                onChange={handleTemperaturaChange}
                onKeyDown={prevent}
                required
                name="temperatura"
                id='temperatura'
                type='number'
                label='Temperatura'
                placeholder='Ingresa la temperatura'
                variant='outlined'
                disabled={cTemperatura}
            />
            {/* <div>
                <div className="card-body">
                    <Container>
                        <h3>¿Presenta algunos de estos síntomas?</h3>
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
            </div> */}

            <div style={{ marginTop: 25 }}>
                <ButtonIcon
                    bgColor='#00A7AF'
                    title='Validar'
                    onClick={() => registro()}
                />
            </div>
        </div>
    )
}

export default Aprendiz;
