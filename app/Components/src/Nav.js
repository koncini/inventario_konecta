import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <a class="navbar-brand" href="/inventario_konecta/public/product">Inventario de productos</a>
        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/inventario_konecta/public/product/index">
                Listar{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/inventario_konecta/public/product/form">
                Crear
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/inventario_konecta/public/product/edit/5">
                Editar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
