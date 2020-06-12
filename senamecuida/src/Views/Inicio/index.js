import React, { Component } from 'react';
import { Title, SubTitle, Text } from '../../Components/common/Texts';
import { CardRol } from '../../Components/Cards/Card';
import { faUserAlt, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import './estilos.css'

class Inicio extends Component {
    render() {
        return (
            <div className='container'>
                <Title title='SENA ME CUIDA' />
                <SubTitle title='Para registrarte selecciona tu cargo en el Sena' />
                <div className='contCards'>
                    <CardRol title='Soy visitante' bgColor='#00A7AF' icon={faUserAlt} />
                    <CardRol title='Soy funcionario' bgColor='#707070' icon={faUserTie} />
                    <CardRol title='Soy visitante' bgColor='#006164' icon={faUserGraduate} />
                </div>
                <div className='contText'>
                    <Text
                        align='center'
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />

                </div>
            </div>
        )
    }
}

export default Inicio