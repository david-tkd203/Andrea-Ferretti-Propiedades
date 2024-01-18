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


  export default FilterSection