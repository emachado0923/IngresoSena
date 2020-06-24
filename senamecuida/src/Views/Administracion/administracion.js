import React, { Component } from 'react';


import './estilos.css';
import NavAdmin from '../../Components/Navs/NavAdmin';
import Table from '../../Components/Table/Table';
import { Card } from '../../Components/Cards/Cards';


class Admin extends Component{
    render(){
        return(
            <div className='containerAdmin'>
                <NavAdmin></NavAdmin>
                <div className='contAdmin'>
                    <Card></Card>
                </div>
            </div>
        )
    }
}

export default Admin