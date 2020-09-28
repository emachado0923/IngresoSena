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

const Tutorial = () => {

    

    return (
        <div className='containerForm'>
            <iframe width="760" height="515" src="https://www.youtube.com/embed/Wbm5FgdTO6A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Tutorial;