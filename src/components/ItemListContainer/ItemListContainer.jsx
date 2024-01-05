import { Link } from 'react-router-dom';
import './ItemListContainer.css';

function ItemListContainer() {
  const items = [
    { id: 1, name: "Propiedad en arriendo", category: "Casa", image: "./propiedades arriendo/CASA_ARRIENDO_1.jpeg", descripcion: "Departamento bastante cómodo e iluminado y de tamaño acorde a su capacidad emplazado en QUINTO piso, tiene orientación surponiente. El condominio cuenta con una excelente conectividad y en su equipamiento destaca la proximidad a cuatro excelentes colegios, además a supermercado, centro comercial, panaderías, almacenes, la locomoción pública transita por fuera del condominio.", comuna: "Curico", operacion: "Venta" },
    { id: 2, name: "Propiedad en venta", category: "Casa", image: "./propiedades en venta/VENTA_CASA_2.jpeg", descripcion: "Casa que se encuentra emplazada en calle, a una cuadra de la Plaza San Francisco, Avenida España, próximo a supermercados, comercio y a menos de 10 minutos caminando del centro cívico de la ciudad. Construcción aislada, de albañilería y en un nivel. El piso de la mayoría de los espacios de la propiedad es de parquet.", comuna: "Curico", operacion: "Arriendo" },
  ];

  const arriendos = items.filter(item => item.operacion === "Arriendo");
  const ventas = items.filter(item => item.operacion === "Venta");

  return (
    <div className="item-list-container">
      <h1>Arriendos</h1>
      <ul>
        {ventas.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>
                  <Link to={`/items/${item.id}`}>{item.name}</Link>
                </h3>
                <span> - {item.category}</span>
                <p>{item.descripcion}</p>
                <p>Comuna: {item.comuna}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h1>Ventas</h1>
      <ul>
        {arriendos.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>
                  <Link to={`/items/${item.id}`}>{item.name}</Link>
                </h3>
                <span> - {item.category}</span>
                <p>{item.descripcion}</p>
                <p>Comuna: {item.comuna}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;


