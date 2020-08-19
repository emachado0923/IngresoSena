import React from 'react';
import './estilos.css';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Modal } from 'react-bootstrap';
import { Title} from '../../Components/common/Texts';


// import { Input } from '../common/Inputs';
import { ButtonIcon } from '../../Components/common/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Aprendiz = () => {

    const classes = useStyles();

    const [nombre, setNombre] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [documentoIdentidad, setDocumentoIdentidad] = React.useState('')
    const [celular, setCelular] = React.useState('')
    const [telefono, setTelefono] = React.useState('')
    const [direccionResidencia, setDireccionResidencia] = React.useState('')
    const [eps, setEps] = React.useState('')
    const [ficha, setFicha] = React.useState('')
    const [programaDeFormacion, setProgramaDeFormacion] = React.useState('')

    const handleNombreChange = (event) => setNombre(event.target.value)
    const handleEmailChange = (event) => setEmail(event.target.value)
    const handleDocumentoIdentidadChange = (event) => setDocumentoIdentidad(event.target.value)
    const handleCelularChange = (event) => setCelular(event.target.value)
    const handleTelefonoChange = (event) => setTelefono(event.target.value)
    const handleDireccionResidenciaChange = (event) => setDireccionResidencia(event.target.value)
    const handleEpsChange = (event) => setEps(event.target.value)
    const handleFichaChange = (event) => setFicha(event.target.value)
    const handleProgramaDeFormacionChange = (event) => setProgramaDeFormacion(event.target.value)

    //Segundo modal
    const [modalSec, setModalSec] = React.useState(false);
    const OpenModalSec = () => setModalSec(true);

    function prevent() {
        document.querySelector("#numeroId").addEventListener("keypress", function (evt) {
            if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        });
        document.querySelector("#tel1").addEventListener("keypress", function (evt) {
            if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        });
        document.querySelector("#celular").addEventListener("keypress", function (evt) {
            if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        });
        document.querySelector("#numeroFicha").addEventListener("keypress", function (evt) {
            if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        });
        document.querySelector("#nombre").addEventListener("keypress", function (evt) {
            if (!(evt.which >= 65 && evt.which <= 120) && (evt.which !== 32 && evt.which !== 0)) {
                evt.preventDefault();
            }
        });
    }

    async function registro() {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var address = document.querySelector('#correo').value;
        if (reg.test(address) == false) {
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: "¡Debes ingresar una direccion de correo electronico valida!",
                timer: 10500
            })
            return (false);
        } else {

            await fetch(`${process.env.REACT_APP_API_URL}/api/aprendiz/create`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ nombre, email, documentoIdentidad, celular, telefono, direccionResidencia, eps, ficha, programaDeFormacion })
            })
                .then(function (result) {
                    if (result['ok'] === true) {
                        result.text().then(function (data) {
                            console.log(data);
                            Swal.fire({
                                icon: 'success',
                                title: '¡BIEN!',
                                text: data,
                                timer: 1500
                            })
                        })
                    }
                    else if (result.status === 400) {
                        result.text().then(function (data) {
                            Swal.fire({
                                icon: 'error',
                                title: '¡DEBES LLENAR TODOS LOS CAMPOS!',
                                timer: 10500
                            })
                        })
                    } else {
                        result.text().then(function (data) {
                            Swal.fire({
                                icon: 'error',
                                title: '¡Este dato ya se encuentra registrado en el aplicativo!',
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
    }

    function validateEmail(emailField) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) {
            alert('Invalid Email Address');
            return false;
        }

        return true;

    }

    return (
        <div className='containerForm' name="formularioContacto">
            <TextField
                value={nombre}
                onChange={handleNombreChange}
                onKeyDown={prevent}
                required
                fullWidth
                name="nombre"
                id='nombre'
                type='text'
                label='Nombre completo'
                placeholder='Ingresa tu nombre completo'
                variant="outlined"
            />
            <div style={{ width: '100%', marginTop: '1.5%' }}>
                <TextField
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    pattern=".+@foo.com"
                    required
                    fullWidth
                    name="email"
                    id='correo'
                    // type='email'
                    label='Correo electrónico'
                    placeholder='Ingresa tu correo'
                    variant="outlined"
                />
            </div>
            <div style={{ width: '100%', marginTop: '1.5%' }}>
                <TextField
                    value={documentoIdentidad}
                    onChange={handleDocumentoIdentidadChange}
                    onKeyDown={prevent}
                    required
                    fullWidth
                    name="documentoIdentidad"
                    id='numeroId'
                    type='number'
                    label='Número de documento'
                    placeholder='Ingresa tu número de documento'
                    variant="outlined"
                />
            </div>
            <div style={{ width: '100%', marginTop: '1.5%' }}>
                <TextField
                    value={telefono}
                    onChange={handleTelefonoChange}
                    onKeyDown={prevent}
                    required
                    fullWidth
                    name="telefono"
                    id='tel1'
                    type='number'
                    label='Número de teléfono'
                    placeholder='Ingresa tu número de teléfono'
                    variant="outlined"
                />
            </div>
            <div style={{ width: '100%', marginTop: '1.5%' }}>
                <TextField
                    value={celular}
                    onChange={handleCelularChange}
                    onKeyDown={prevent}
                    required
                    fullWidth
                    name="celular"
                    id='celular'
                    type='number'
                    label='Número de teléfono de un familiar'
                    placeholder='Ingresa número de teléfono'
                    variant="outlined"
                />
            </div>
            <div style={{ width: '100%', marginTop: '1.5%' }}>
                <TextField
                    value={direccionResidencia}
                    onChange={handleDireccionResidenciaChange}
                    required
                    fullWidth
                    name="direccionResidencia"
                    id='direccion'
                    type='text'
                    label='Dirección'
                    placeholder='Ingresa tu dirección de residencia'
                    variant="outlined"
                />
            </div>
            <div style={{ width: '100%', marginTop: '1.5%', marginLeft: '-2%' }}>
                <FormControl variant="outlined" fullWidth className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">EPS</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="EPS"
                        value={eps}
                        onChange={handleEpsChange}
                    >
                        <MenuItem value={'SURA'} onChange={handleEpsChange}>SURA</MenuItem>
                        <MenuItem value={'Coomeva'} onChange={handleEpsChange}>Coomeva</MenuItem>
                        <MenuItem value={'Salud Colmena'} onChange={handleEpsChange}>Salud Colmena</MenuItem>
                        <MenuItem value={'Salud total'} onChange={handleEpsChange}>Salud Total</MenuItem>
                        <MenuItem value={'Cafesalud'} onChange={handleEpsChange}>Cafesalud</MenuItem>
                        <MenuItem value={'Sanitas'} onChange={handleEpsChange}>Sanitas</MenuItem>
                        <MenuItem value={'Saludcoop'} onChange={handleEpsChange}>Saludcoop</MenuItem>
                        <MenuItem value={'Colseguros'} onChange={handleEpsChange}>Colseguros</MenuItem>
                        <MenuItem value={'Servicios medicos colpatria'} onChange={handleEpsChange}>Servicios medicos colpatria</MenuItem>
                        <MenuItem value={'Cruz blanca'} onChange={handleEpsChange}>Cruz Blanca</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ width: '100%', marginTop: '1.5%' }}>
                <TextField
                    value={ficha}
                    onChange={handleFichaChange}
                    onKeyDown={prevent}
                    required
                    fullWidth
                    name="numeroFicha"
                    id='numeroFicha'
                    label='Numero de Ficha'
                    type='number'
                    placeholder='Ingresa tu numero de ficha'
                    variant="outlined"

                />
            </div>
            <div style={{ width: '100%', marginTop: '1.5%' }}>
                <TextField
                    value={programaDeFormacion}
                    onChange={handleProgramaDeFormacionChange}
                    required
                    fullWidth
                    name="programaDeFormacion"
                    id='programaDeFormacion'
                    label='Programa De Formacion'
                    type='text'
                    placeholder='Ingresa el nombre de tu programa de Formacion'
                    variant="outlined"

                />
            </div>
            <div style={{ marginTop: 25 }}>
                <ButtonIcon
                    bgColor='#00A7AF'
                    title='Siguiente'
                    onClick={() => OpenModalSec()}
                />
            </div>
            <Modal show={modalSec}>
                <Modal.Header>
                    <Modal.Title>
                        <Title title='FORMULARIO  DE  REGISTRO' />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Hola nuevo modal</h2>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonIcon bgColor='#00A7AF' title='Anterior' onClick={() => { setModalSec(false) }} />
                    <ButtonIcon bgColor='#2ecc71' title='Registrarse' onClick={() => registro()} />
                    <ButtonIcon bgColor='#e74c3c' title='Cerrar' onClick={() => { setModalSec(false) }} />
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Aprendiz;