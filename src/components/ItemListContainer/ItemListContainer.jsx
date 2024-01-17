import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";  
import './ItemListContainer.css';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../Service/Firebase/FirebaseConfig";
import { ItemListSection } from '../ItemListSection/ItemListSection'
import { FilterSection } from '../FilterSection/FilterSection'

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [filtro, setFiltro] = useState("todos"); // Puedes cambiar el valor inicial según tus necesidades

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const collectionRef = collection(db, 'ventas');
      
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
      <ItemListSection title="Propiedades" {...filteredProductos} />
    </div>
  );
}


export default ItemListContainer;
