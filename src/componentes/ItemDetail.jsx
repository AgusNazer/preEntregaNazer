import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import products from "./mock/products"


 const Item = ( {title, stock, id, price, image, description} ) => {
  const onAdd = (cantidad) => {
    console.log(`se ha agregado ${cantidad} `)
}


    return (
       
      <div className="m-5 bg-gray-400 p-5">
      {/* <p>hola</p> */}
          
          <div>{title}</div>
          <div>{stock}</div>
          <div>{price}</div>
          <div>{description}</div>
          <figure className='w-80 mt-10 ml-5'><img src={image}  /></figure>
          <ItemCount stock={stock} initial={0} onAdd={onAdd} />
          {/*  <Link to={`/item/${id}`} className="btn btn-info">Ver Detalles</Link>  */}
           
         
            
         
          
      </div>
    )
  }

 export default Item




