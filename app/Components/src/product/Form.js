import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor () {
    super();
    this.state = {
      fieldNombre: '',
      fieldReferencia: '',
      fieldPrecio: '',
      fieldPeso: '',
      fieldCategoria: '',
      fieldStock: '',
    };
  }

  onClickSave () {
    const baseUrl = 'http://localhost:8083/inventario_konecta/public/api/product/create';

    const datapost = {
      nombre: this.state.fieldNombre,
      referencia: this.state.fieldReferencia,
      precio: this.state.fieldPrecio,
      peso: this.state.fieldPeso,
      categoria: this.state.fieldCategoria,
      stock: this.state.fieldStock,
    };

    axios
      .post(baseUrl, datapost)
      .then(response => {
        console.log(response);
        alert(response.data.message);
      }).catch(error => {
      alert('Error 500 ' + error);
    });
  }

  render () {
    return (
      <div class="container">
        <h4>Crear Producto</h4>
        <hr/>
        <div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="nombre">Nombre de producto</label>
              <input
                type="text"
                class="form-control"
                value={this.state.fieldNombre}
                onChange={(value) =>
                  this.setState({ fieldNombre: value.target.value })
                }
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="referencia">Referencia</label>
              <input
                type="text"
                class="form-control"
                value={this.state.fieldreferencia}
                onChange={(value) =>
                  this.setState({ fieldReferencia: value.target.value })
                }
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="precio">Precio</label>
              <input
                type="number"
                class="form-control"
                value={this.state.fieldPrecio}
                onChange={(value) =>
                  this.setState({ fieldPrecio: value.target.value })
                }
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="peso">Peso</label>
              <input
                type="text"
                class="form-control"
                value={this.state.fieldPeso}
                onChange={(value) =>
                  this.setState({ fieldPeso: value.target.value })
                }
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="categoria">Categoría</label>
              <input
                type="text"
                class="form-control"
                value={this.state.fieldCategoria}
                onChange={(value) =>
                  this.setState({ fieldCategoria: value.target.value })
                }
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="stock">Stock</label>
              <input
                type="number"
                class="form-control"
                value={this.state.fieldStock}
                onChange={(value) =>
                  this.setState({ fieldStock: value.target.value })
                }
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <button
                onClick={() => this.onClickSave()}
                class="btn btn-primary btn-block"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
