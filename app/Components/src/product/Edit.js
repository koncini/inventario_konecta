import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

  constructor () {
    super();
    this.state = {
      id: 0,
      fieldNombre: '',
      fieldReferencia: '',
      fieldPrecio: '',
      fieldPeso: '',
      fieldCategoria: '',
      fieldStock: ''
    };
  }

  onClickUpdate () {
    const id = this.state.id;
    const baseUrl = 'http://localhost:8083/inventario_konecta/public/api/product/update/' + id;

    const datapost = {
      nombre: this.state.fieldNombre,
      referencia: this.state.fieldReferencia,
      precio: this.state.fieldPrecio,
      peso: this.state.fieldPeso,
      categoria: this.state.fieldCategoria,
      stock: this.state.fieldStock
    };

    axios.put(baseUrl, datapost)
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        alert('Error 500 ' + error);
      });
  }

  componentDidMount () {
    let userId = this.props.match.params.id;
    axios.get('http://localhost:8083/inventario_konecta/public/api/product/get/' + userId)
      .then(response => {
        const res = response.data;
        if (res.success) {
          console.log('Product ');
          console.log(res.data);
          this.setState({
            id: res.data.id,
            fieldNombre: res.data.nombre,
            fieldReferencia: res.data.referencia,
            fieldPrecio: res.data.precio,
            fieldPeso: res.data.peso,
            fieldCategoria: res.data.categoria,
            fieldStock: res.data.stock
          });
        }
      })
      .catch(error => {
        alert('Error ==>' + error);
      });
  }

  render () {
    let userId = this.props.match.params.id;

    return (
      <div class="container">
        <div>
          <h4>Editar producto {userId} </h4>
          <hr/>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Nombre de producto</label>
              <input type="text" class="form-control"
                     value={this.state.fieldNombre}
                     onChange={(event) => this.setState({ fieldNombre: event.target.value })}/>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Referencia</label>
              <input type="text" class="form-control"
                     value={this.state.fieldReferencia}
                     onChange={(event) => this.setState({ fieldReferencia: event.target.value })}/>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Precio</label>
              <input type="number" class="form-control"
                     value={this.state.fieldPrecio}
                     onChange={(event) => this.setState({ fieldPrecio: event.target.value })}/>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Peso </label>
              <input type="text" class="form-control"
                     value={this.state.fieldPeso}
                     onChange={(event) => this.setState({ fieldPeso: event.target.value })}/>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Categoría</label>
              <input type="text" class="form-control"
                     value={this.state.fieldCategoria}
                     onChange={(event) => this.setState({ fieldCategoria: event.target.value })}/>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Stock</label>
              <input type="number" class="form-control"
                     value={this.state.fieldStock}
                     onChange={(event) => this.setState({ fieldStock: event.target.value })}/>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <button onClick={() => this.onClickUpdate()} class="btn btn-primary btn-block"
                      type="submit">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
