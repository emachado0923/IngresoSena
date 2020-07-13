import React from 'react';
import './estilos.css';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


import {Input} from '../../common/Inputs';
import {ButtonIcon} from '../../../Components/common/Button';
import Encuesta from "../Encuesta/encuesta";

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
    const moment = require('moment-timezone');


    const [documentoIdentidad, setDocumentoIdentidad] = React.useState('')
    const [estaVerificado, setEstaVerificado] = React.useState(null)

    const verificacion = React.useCallback(() => setEstaVerificado(!estaVerificado))

    const handleDocumentoIdentidadChange = (event) => setDocumentoIdentidad(event.target.value)
    console.log(typeof documentoIdentidad);
    console.log(documentoIdentidad);

    async function registro() {
        // console.log(typeof documentoIdentidad);
        // console.log( documentoIdentidad);
        await fetch('http://localhost:3008/api/funcionario/ingreso', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({documentoIdentidad})
        })
            .then(function (result) {
                if (result['ok'] === true) {

                    console.log(moment().tz("America/Bogota").format());

                    result.json().then(async function (data) {

                        console.log(data);
                        await fetch('http://localhost:3008/api/ingresoDia/create', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',

                            },
                            body: JSON.stringify(data)

                        })

                        Swal.fire({
                            icon: 'success',
                            title: '¡BIEN!',
                            text: JSON.stringify(`Bienvenido ${data.nombre} con EPS ${data.eps}`),
                            timer: 10500
                        })
                        verificacion()
                    })
                } else {
                    result.text().then(function (data) {
                        setEstaVerificado(false)
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
            />
            <div style={{marginTop: 25}}>
                <ButtonIcon
                    bgColor='#00A7AF'
                    title='Validar'
                    onClick={() => registro()}
                />
            </div>

            {estaVerificado ? (
                <Encuesta/>
            ) : null}
        </div>
    )
}

export default Aprendiz;
