import React from 'react';
import './estilos.css';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


import { Input } from '../common/Inputs';
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

    async function registro() {
        await fetch('http://localhost:3008/api/aprendiz/create', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
        },  
        body: JSON.stringify({nombre, email, documentoIdentidad, celular, telefono, direccionResidencia, eps, ficha, programaDeFormacion})
        })
        .then(function (result) {
        if(result['ok'] === true){
            result.text().then(function(data) {
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: '¡BIEN!',
                text: data,
                timer: 1500
            })
            })
            }
            else{
            result.text().then(function(data) { 
                console.log(data);
                Swal.fire({
                icon: 'error',
                title: '¡ERROR!',
                text: data,
                timer: 5500
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

    return (
        <div className='containerForm'>
            <TextField
                className="InputInicio"
                value={nombre}
                onChange={handleNombreChange}
                required
                fullWidth
                name="nombre"
                id='nombre'
                type='text'
                label='Nombre completo'
                placeholder='Ingresa tu nombre completo'
                variant="outlined" 

            />
            <TextField
                value={email}
                onChange={handleEmailChange}
                required
                fullWidth
                name="email"
                id='correo'
                type='text'
                label='Correo electrónico'
                placeholder='Ingresa tu correo'
                variant="outlined" 

            />
            <FormControl variant="outlined" fullWidth className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Tipo de documento</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Age"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'1'}>Cedula de Ciudadania</MenuItem>
                <MenuItem value={'2'}>Tarjeta de identidad</MenuItem>
                </Select>
            </FormControl>    
            <TextField
                value={documentoIdentidad}
                onChange={handleDocumentoIdentidadChange}
                required
                fullWidth
                name="documentoIdentidad"
                id='numeroId'
                type='number'
                label='Número de documento'
                placeholder='Ingresa tu número de documento'
                variant="outlined" 

            />
            <TextField
                value={telefono}
                onChange={handleTelefonoChange}
                required
                fullWidth
                name="telefono"
                id='tel1'
                type='number'
                label='Número de teléfono'
                placeholder='Ingresa tu número de teléfono'
                variant="outlined" 

            />
            <TextField
                value={celular}
                onChange={handleCelularChange}
                required
                fullWidth
                name="celular"
                id='celular'
                type='number'
                label='Número de teléfono de un familiar'
                placeholder='Ingresa número de teléfono'
                variant="outlined" 

            />
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
            <TextField
                value={eps}
                onChange={handleEpsChange}
                required
                fullWidth
                name="eps"
                id='eps'
                label='EPS'
                type='text'
                placeholder='Ingresa tu EPS'
                variant="outlined" 

            />
            <TextField
                value={ficha}
                onChange={handleFichaChange}
                required
                fullWidth
                name="numeroFicha"
                id='numeroFicha'
                label='Numero de Ficha'
                type='number'
                placeholder='Ingresa tu numero de ficha'
                variant="outlined" 

            />
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
            <div style={{marginTop:25}}>
            <ButtonIcon 
                bgColor='#00A7AF' 
                title='Registrarse'
                onClick={() => registro()} 
            />
            </div>
        </div>
    )
}

export default Aprendiz;