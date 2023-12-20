import React from 'react';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';

function ItemListContainer() {
  const items = [
    { id: 1, name: 'Propiedad en arriendo', category: 'arriendos', image: '../propiedades arriendo/CASA_ARRIENDO_1.jpeg'},
    { id: 2, name: 'Propiedad en venta', category: 'ventas', image: '../propiedades en venta/CASA_VENTA_1.jpeg'},
  ];

  const arriendos = items.filter(item => item.category === 'arriendos');
  const ventas = items.filter(item => item.category === 'ventas');

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

