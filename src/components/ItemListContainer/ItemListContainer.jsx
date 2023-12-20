import React from 'react';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';

function ItemListContainer() {
  const items = [
    { id: 1, name: "Propiedad en arriendo", category: "Casa", image: "../propiedades arriendo/CASA_ARRIENDO_1.jpeg", comuna:  "Curico", operacion: "Venta"},
    { id: 2, name: "Propiedad en venta", category: "Casa", image: "../propiedades en venta/CASA_VENTA_1.jpeg", comuna:  "Curico", operacion: "Arriendo"},
  ];

  const arriendos = items.filter(item => item.operacion === "arriendo");
  const ventas = items.filter(item => item.operacion === "venta");

  return (
    <div className="item-list-container">
      <h1>Ventas</h1>
      <ul>
        {ventas.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <span> - {item.category}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <h1>Arriendos</h1>
      <ul>
        {arriendos.map((item) => (
            <li key={item.id}>
              <Link to={`/item/${item.id}`}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <span> - {item.category}</span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;

