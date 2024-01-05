import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"
function ItemDetailContainer() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalles de la Propiedad</h2>
      <div>
        <img src={`../public/propiedades en venta/VENTA_CASA_${id}.jpeg`} alt={`Propiedad ${id}`} />
      </div>
      <div>
        <h3>{`Propiedad ${id}`}</h3>
        <p>{`Descripción detallada de la Propiedad ${id}`}</p>
      </div>
    </div>
  );
}

export default ItemDetailContainer;



