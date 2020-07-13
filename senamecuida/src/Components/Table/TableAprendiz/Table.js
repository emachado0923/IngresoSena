import React, { Component } from 'react';
import {Button} from '@material-ui/core'
import MUIDataTable from "mui-datatables";
import Axios from 'axios'

const columns = ["nombre", "email", "documentoIdentidad", "telefono", "direccionResidencia", "eps", "ficha", "programaDeFormacion"];


  const options = {
    filterType: 'checkbox',
  };

class Table extends Component {

  state = {
    products: []
  }       

  async componentDidMount(){
      const res = await Axios.get('http://localhost:3008/api/aprendiz/list')
      this.setState({products: res.data.data})
      console.log(this.state.products)
  }

render(){
  return(
    <div>
        <MUIDataTable
          title={"Lista de Aprendices"}
          data={this.state.products}
          columns={columns}
          options={options}
        />
    </div>
  )
  }
}

export default Table
