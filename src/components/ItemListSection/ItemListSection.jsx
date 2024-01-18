
import Item from "../Item/Item";
const ItemListSection = ({ items }) => {

   

    return(
<>
      <h1>Propiedades</h1>
      <div>
            {
            items.map((item) => {
                
            return  <Item key={item.id} {...item}  />
            })
            }
            
         
      </div>
</>
    )

}
    
  
export default ItemListSection