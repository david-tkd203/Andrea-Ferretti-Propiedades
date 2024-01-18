const Item = ({id, descripcion, Precio, baños }) => {

    
    return(
        <div key={id}  >
            <p>{Precio} </p>
            <p>{descripcion} </p>
            <p>{baños} </p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
}


export default Item 