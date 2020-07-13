import React, { Component } from 'react';


import './estilos.css';
import NavAdmin from '../../Components/Navs/NavAdmin';
//import Table from '../../Components/Table/Table';
import GraphicPrueba from '../../Components/Graphics/GraphicPrueba';
import { Card, CardInfo } from '../../Components/Cards/Cards';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../Components/common/Texts';


class Admin extends Component {
    render() {
        return (
            <div className='containerAdmin'>
                <NavAdmin></NavAdmin>
                <Title title='ESTADISTICAS' />
                <div className='contAdmin'>
                    <div className='contEstadisticas'>
                        <GraphicPrueba />
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin