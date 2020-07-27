import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import Axios from 'axios'

const columns = ["nombre", "email", "documentoIdentidad", "telefono", "direccionResidencia", "eps"];


  const options = {
    filterType: 'checkbox',
  };

class Table extends Component {

  state = {
    products: []
  }       

  async componentDidMount(){
      const res = await Axios.get(`${process.env.REACT_APP_API_URL}/api/visitante/list`)
      this.setState({products: res.data.data})
  }

render(){
  return(
    <div>
        <MUIDataTable
          title={"Lista de Visitantes"}
          data={this.state.products}
          columns={columns}
          options={options}
        />
    </div>
  )
  }
}

export default Table
