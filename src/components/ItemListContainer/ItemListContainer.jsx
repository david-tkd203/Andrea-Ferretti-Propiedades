import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";  
import './ItemListContainer.css';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../Service/Firebase/FirebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [filtro, setFiltro] = useState("todos"); // Puedes cambiar el valor inicial según tus necesidades

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const collectionRef = collection(db, 'products');
      
      try {
        const querySnapshot = await getDocs(collectionRef);
        const productsArray = querySnapshot.docs.map(doc => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });
        setProductos(productsArray);
      } catch (error) {
        console.error("Error en los documentos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  const handleFilterChange = (event) => {
    setFiltro(event.target.value);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  const filteredProductos = filtro === "todos" ? productos : productos.filter(item => item.operacion === filtro);

  return (
    <div className="item-list-container">
      <FilterSection filtro={filtro} onFilterChange={handleFilterChange} />
      <ItemListSection title="Propiedades" items={filteredProductos} />
    </div>
  );
}

const FilterSection = ({ filtro, onFilterChange }) => (
  <div>
    <h2>Filtrar por:</h2>
    <select value={filtro} onChange={onFilterChange}>
      <option value="todos">Todos</option>
      <option value="Arriendo">Arriendos</option>
      <option value="Venta">Ventas</option>
    </select>
  </div>
);

const ItemListSection = ({ title, items }) => (
  <>
    <h1>{title}</h1>
    <ul>
      {items.map((item) => (
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
              <p>Baño: {item.baño}</p>
              <p>Habitaciones: {item.habitaciones}</p>
              <p>Estacionamientos: {item.estacionamientos}</p>
              <p>Precio: {item.precio}</p>
              <p>Tipo: {item.tipo}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </>
);

export default ItemListContainer;
