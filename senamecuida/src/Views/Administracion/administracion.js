import React from 'react';


import './estilos.css';
import NavAdmin from '../../Components/Navs/NavAdmin';
//import Table from '../../Components/Table/Table';
import Pie from '../../Components/Graphics/Pie';
import Line from '../../Components/Graphics/Line';
import Doughnut from '../../Components/Graphics/Doughnut';
import Doughnut1 from '../../Components/Graphics/Douhhnut1';
// import { Card, CardInfo } from '../../Components/Cards/Cards';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { /*Title,*/ TitleIng } from '../../Components/common/Texts';


function Admin(){

    function actualizar(){window.location.reload(true);}
    setInterval(() => {
        actualizar()
    }, 100000);
        return (
            <div className='containerAdmin' >
                <NavAdmin></NavAdmin>
                <TitleIng titleing='ESTADÍSTICAS' />
                <div className='contAdmin' >
                    <div className='contEstadisticas'>
                        <Pie />
                    </div>
                    <div className='contEstadisticas'>
                        <Doughnut1 />
                    </div>
                </div>
                <div className='contAdmin' >
                    <div className='contEstadisticas'>
                        {/* <Pie /> */}
                    </div>
                    <div className='contEstadisticas'>
                        <Doughnut />
                    </div>
                    <div className='contEstadisticas'>
                        {/* <Doughnut1 /> */}
                    </div>
                </div>
                <div className='contAdmin'>
                    <div className='contEstadisticass'>
                        <Line />
                    </div>
                </div>
                <div className='contAdmin'>

                </div>
                
            </div>
        )
    }

export default Admin