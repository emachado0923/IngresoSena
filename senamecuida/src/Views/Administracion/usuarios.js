import React, { Component } from 'react';


import './estilos.css';
import NavAdmin from '../../Components/Navs/NavAdmin';
//import Table from '../../Components/Table/Table';
import TableAprendiz from '../../Components/Table/TableAprendiz/Table';
import TableFuncionaro from '../../Components/Table/TableFuncionario/Table';
import TableVisitante from '../../Components/Table/TableVisitante/Table';
import { Card, CardInfo } from '../../Components/Cards/Cards';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../Components/common/Texts';


class Admin extends Component {
    render() {
        return (
            <div className='containerAdmin'>
                <NavAdmin></NavAdmin>
                <div style={{padding:'1%'}}></div>
                <Title title='VISITANTES REGISTRADOS' />
                <div className='contAdmin'>
                    <div className='contCardsInfo'>
                        <CardInfo
                            bgColor='#16ade1'
                            icon={faUserCircle}
                            title='103'
                            info='N° Visitantes registrados'
                        />
                    </div>
                    <div className='contEstadisticas'>
                        <TableVisitante />
                    </div>
                </div>
                <div style={{padding:'3%'}}></div>
                <Title title='FUNCIONARIOS REGISTRADOS' />
                <div className='contAdmin'>
                    <div className='contCardsInfo'>
                        <CardInfo
                            bgColor='#16ade1'
                            icon={faUserCircle}
                            title='103'
                            info='N° Funcionarios registrados'
                        />
                    </div>
                    <div className='contEstadisticas'>
                        <TableFuncionaro />
                    </div>
                </div>
                <div style={{padding:'2%'}}></div>
                <Title title='APRENDICES REGISTRADOS' />
                <div className='contAdmin'>
                    <div className='contCardsInfo'>
                        <CardInfo
                            bgColor='#16ade1'
                            icon={faUserCircle}
                            title='103'
                            info='N° Aprendices registrados'
                        />
                    </div>
                    <div className='contEstadisticas'>
                        <TableAprendiz />
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin