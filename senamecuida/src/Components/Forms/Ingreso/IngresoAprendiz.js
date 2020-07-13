import React from 'react';
import './estilos.css';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {Form, Container, Row, Col, Alert} from 'react-bootstrap'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Encuesta from '../Encuesta/encuesta'


import {Input} from '../../common/Inputs';
import {ButtonIcon} from '../../../Components/common/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Aprendiz = (callback, deps) => {

    const classes = useStyles();

    const [documentoIdentidad, setDocumentoIdentidad] = React.useState('')
    const [estaVerificado, setEstaVerificado] = React.useState(null)

    const handleDocumentoIdentidadChange = (event) => setDocumentoIdentidad(event.target.value)
    const verificacion = React.useCallback(() => setEstaVerificado(!estaVerificado))

    async function registro() {
        await fetch('http://localhost:3008/api/aprendiz/ingreso', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({documentoIdentidad})
        })
            .then(function (result) {
                    if (result['ok'] === true) {
                        result.text().then(function (data) {
                            Swal.fire({
                                icon: 'success',
                                title: '¡PERSONA ENCONTRADA!',
                                text: JSON.stringify(`Bienvenido ${data.nombre} con EPS ${data.eps} ficha ${data.ficha}`),
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

                }
            )
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
