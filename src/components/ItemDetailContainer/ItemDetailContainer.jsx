import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { id } = useParams();
  const itemDetails = {
    id: id,
    name: `Propiedad ${id}`,
    description: `Descripción detallada de la Propiedad ${id}`,
    image: `./propiedades en venta/CASA_VENTA_${id}.jpeg`, 
  };

  return (
    <div>
      <h2>Detalles de la Propiedad</h2>
      <div>
        <img src={itemDetails.image} alt={itemDetails.name} />
      </div>
      <div>
        <h3>{itemDetails.name}</h3>
        <p>{itemDetails.description}</p>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
