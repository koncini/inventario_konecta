import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class List extends Component {
  constructor () {
    super();
    this.state = {
      listProduct: [],
    };
  }

  componentDidMount () {
    axios
      .get('http://localhost:8083/inventario_konecta/public/api/product/list')
      .then(response => {
        this.setState({ listProduct: response.data.data });
      })
      .catch((error) => {
        alert('Error 500 ' + error);
      });
  }

  onClickDelete (i, id) {
    var yes = confirm('¿Realmente desea eliminar este item?');
    if (yes === true) {
      const urlDelete = 'http://localhost:8083/inventario_konecta/public/api/product/delete/' + id;
      axios.delete(urlDelete)
        .then((response) => {
          const res = response.data;
          if (res.success) {
            alert(res.message);
            const list = this.state.listProduct;
            list.splice(i, 1);
            this.setState({ listProduct: list });
          }
        })
        .catch(error => {
          alert('Error ==> ' + error);
        });
    }
  }

  render () {
    return (
      <section>
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Referencia</th>
            <th scope="col">Precio</th>
            <th scope="col">Peso</th>
            <th scope="col">Categoria</th>
            <th scope="col">Stock</th>
            <th scope="col">Fecha ultima actualizacion</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          {this.state.listProduct.map((data, i) => {
            return (
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.nombre}</td>
                <td>{data.referencia}</td>
                <td>{data.precio}</td>
                <td>{data.peso}</td>
                <td>{data.categoria}</td>
                <td>{data.stock}</td>
                <td>{data.fecha_actualizacion}</td>
                <td>
                  <Link
                    class="btn btn-outline-info"
                    to={'/inventario_konecta/public/product/edit/' + data.id}
                  >
                    Editar
                  </Link>
                  <a onClick={() => this.onClickDelete(i, data.id)} href="#" class="btn btn-danger">
                    Borrar
                  </a>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </section>
    );
  }
}
