import React, { Component } from 'react'
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../estilos.css';


class CardInfoAprendiz extends Component {

    state = {
        documents: []
      }       
    
    async componentDidMount(){
        const res = await Axios.get('http://localhost:3008/api/aprendiz/countDocuments')
        this.setState({documents:res.data.result})
        console.log(this.state.documents);
    }

    render(){
        return (  
            <div className='cardInfo' style={{ background: "#16ade1" }}>
                <div className='topCardInfo'>
                    <FontAwesomeIcon icon={faUserCircle} />
                    <h4>{this.state.documents}</h4>
                </div>
                <h5>N° de Aprendices Registrados</h5>
            </div>
        )
    }   
}

export default CardInfoAprendiz
