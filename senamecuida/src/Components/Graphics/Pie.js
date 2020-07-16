import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import {Typography} from '@material-ui/core'
import { Pie} from 'react-chartjs-2'
import Card from '@material-ui/core/Card';
import Axios from 'axios'
import './estilos.css'

class Chart extends Component {
    state = {
        documents: []
    }       
    
    async componentDidMount(){
        const res = await Axios.get('http://localhost:3008/api/estado/countDocuments')
        localStorage.setItem('personasActivas', res.data.result)

        const res1 = await Axios.get('http://localhost:3008/api/funcionario/countDocuments')
        localStorage.setItem('funcionario', res1.data.result)
        
        
        const res2 = await Axios.get('http://localhost:3008/api/visitante/countDocuments')
        localStorage.setItem('visitante', res2.data.result)
        
        const res3 = await Axios.get('http://localhost:3008/api/aprendiz/countDocuments')
        localStorage.setItem('aprendiz', res3.data.result)

        
        var act = localStorage.getItem('personasActivas')
        var func = localStorage.getItem('funcionario')
        var vis = localStorage.getItem('visitante')
        var aprn = localStorage.getItem('aprendiz')
        var si = parseInt(func)
        var si1 = parseInt(vis)
        var si2 = parseInt(aprn)
        var si3 = parseInt(act)
        var deBaja = ((si+si1+si2)-si3);
        localStorage.setItem('deBaja', deBaja) 
    }

    

    arrayMeses=['Personas DE ALTA', 'Personas DE BAJA']
    arrayDatosxMes=[
        localStorage.getItem('personasActivas'),
        localStorage.getItem('deBaja')
    ]

    constructor(props) {
        super(props);

        this.state = { 
            chartData: {
                labels:this.arrayMeses,
                datasets:[
                    {
                        label:'Ingresos por Mes',
                        data:this.arrayDatosxMes,
                        backgroundColor: [
                        'rgba(204,209,209)',
                        'rgba(52,73,94)',
                        'rgba(249,231,159)',
                        ]
                    }]
            }
        }
    }

    render() { 
        return ( 
            <div className="chart">
                    <Col xs={12} sm={12} md={12} lg={12} >
                    <div className="site-card-border-less-wrapper" >
                        <Card style={{ width: '93%', marginLeft:70, marginTop:20 }}>
                        <Pie
                            data={this.state.chartData}
                            options={{
                                maintainAspectRatio: true
                            }}>
                        </Pie>
                        </Card>
                    </div>                 
                    </Col>
            </div>
        );
    }
}
 
export default Chart;
