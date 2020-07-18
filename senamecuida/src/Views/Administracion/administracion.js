import React, { Component } from 'react';


import './estilos.css';
import NavAdmin from '../../Components/Navs/NavAdmin';
//import Table from '../../Components/Table/Table';
import Pie from '../../Components/Graphics/Pie';
import Line from '../../Components/Graphics/Line';
import { Card, CardInfo } from '../../Components/Cards/Cards';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../Components/common/Texts';


function Admin(){

    function actualizar(){window.location.reload(true);}
    setInterval(() => {
        actualizar()
    }, 100000);
        return (
            <div className='containerAdmin' >
                <NavAdmin></NavAdmin>
                <Title title='ESTADISTICAS' />
                <div className='contAdmin'>
                    <div className='contEstadisticas'>
                        <Line />
                    </div>
                </div>
                <div className='contAdmin' >
                    <div className='contEstadisticas'>
                        <Pie />
                    </div>
                </div>
            </div>
        )
    }

export default Admin