import React, { useEffect } from 'react';
import './estilos.css';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';


// import { Input } from '../../common/Inputs';
import { ButtonIcon } from '../../../Components/common/Button';

const Aprendiz = () => {

    const [documentoIdentidad, setDocumentoIdentidad] = React.useState('')

    const handleDocumentoIdentidadChange = (event) => setDocumentoIdentidad(event.target.value)

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
        }, 1000);
        
        // Se dispara cada vez que se re-renderiza el componente
        return () => {
          clearTimeout(consultarAPI);
        }
      }, [documentoIdentidad]);

    async function registro() {
        await fetch(`${process.env.REACT_APP_API_URL}/api/estadoAprendiz/delete`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },  
        body: JSON.stringify({documentoIdentidad})
        })
        .then(function (result) {
        if(result['ok'] === true){            
            result.json()
            .then(async function(data) {
                await fetch(`${process.env.REACT_APP_API_URL}/api/salidaDia/create`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },  
                body: JSON.stringify(data)
                })
                .then(function (result) {
                    if(result['ok'] === false){
                        Swal.fire({
                            icon: 'error',
                            title: '¡ERROR!',
                            text: JSON.stringify('¡ESTE USUARIO NO SE ENCUENTRA DE ALTA EN EL APLICATIVO!'),
                            timer: 10500
                        })
                        setTimeout(() => {
                            window.location.reload();    
                        }, 3000);
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: '¡BIEN!',
                            text: JSON.stringify(`Hasta luego ${data.nombre}`),
                            timer: 10500
                        })
                        setTimeout(() => {
                            window.location.reload();    
                        }, 3000);
                    }
                })
            })
        }
        else{
            result.text().then(function(data) { 
                Swal.fire({
                icon: 'error',
                title: '¡ERROR!',
                text: JSON.stringify('¡ESTE USUARIO NO SE ENCUENTRA DE ALTA EN EL APLICATIVO!'),
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
            {/* <div style={{marginTop:25}}>
            <ButtonIcon 
                bgColor='#00A7AF' 
                title='Validar'
                onClick={() => registro()} 
            />
            </div> */}
        </div>
    )
}

export default Aprendiz;