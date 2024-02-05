import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, descripcion, precio, baños, estacionamientos, img, propiedad, region }) => {
  const formatearPrecio = (precio) => {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const caracteristicas = descripcion.split(/[-*]/).map(caracteristica => caracteristica.trim());


  return (
    <div id='bloques'>
      <div key={id} id="items">
        <Link to={`/detalle/${id}`}>
          <img src={img} alt="" />
          <p>{propiedad} en la Región de {region}</p>
        </Link>
        <p>Baños: {baños} </p>
        <p>Estacionamientos: {estacionamientos}</p>
        <p>Precio: ${formatearPrecio(precio)} CLP</p>
      </div>
    </div>
  );
};

export default Item;
