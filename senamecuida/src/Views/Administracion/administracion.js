import React, { Component } from 'react';


import './estilos.css';
import NavAdmin from '../../Components/Navs/NavAdmin';
import Table from '../../Components/Table/Table';


class Admin extends Component{
    render(){
        return(
            <div className='containerAdmin'>
                <NavAdmin></NavAdmin>
                <div className='contAdmin'>
                    <Table/>
                </div>
            </div>
        )
    }
}

export default Admin