import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../Service/Firebase/FirebaseConfig";

function ItemDetailContainer() {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const propertyDocRef = doc(db, 'ventas', id);
        const propertyDocSnapshot = await getDoc(propertyDocRef);

        if (propertyDocSnapshot.exists()) {
          setPropertyData(propertyDocSnapshot.data());
        } else {
          console.log('La propiedad no existe en la base de datos.');
        }
      } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
      }
    };

    fetchPropertyData();
  }, [id]);

  if (!propertyData) {
    return <p>Cargando...</p>;
  }

  const { descripcion } = propertyData;

  return (
    <div>
      <h2>Detalles de la Propiedad</h2>
      <div>
        <img src={`/propiedades en venta/VENTA_CASA_${id}.jpeg`} alt={`Propiedad ${id}`} />
      </div>
      <div>
        <h3>{`Propiedad ${id}`}</h3>
        <p>{`Descripción detallada de la Propiedad: ${descripcion}`}</p>
      </div>
    </div>
  );
}

export default ItemDetailContainer;



