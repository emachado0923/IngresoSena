import React, { Component } from 'react';


import './estilos.css';
import NavAdmin from '../../Components/Navs/NavAdmin';
import Table from '../../Components/Table/Table';
import { Card, CardInfo } from '../../Components/Cards/Cards';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../Components/common/Texts';


class Admin extends Component {
    render() {
        return (
            <div className='containerAdmin'>
                <NavAdmin></NavAdmin>
                <Title title='ADMINISTRACIÓN' />
                <div className='contAdmin'>
                    <div className='contCardsInfo'>
                        <CardInfo
                            bgColor='#16ade1'
                            icon={faUserCircle}
                            title='2018'
                            info='Usuarios registrados'
                        />
                        <CardInfo
                            bgColor='#16ade1'
                            icon={faUserCircle}
                            title='2018'
                            info='Usuarios registrados'
                        />
                    </div>
                    <div className='contEstadisticas'>
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin