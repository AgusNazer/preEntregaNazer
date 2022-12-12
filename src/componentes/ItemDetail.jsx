 import React from "react" 

import ItemCount from "./ItemCount"




   const Item = ({item}) => {
    
  const onAdd = (cantidad) => {
    console.log(`se ha agregado ${cantidad} `)
   console.log(item)

  }

    return (
       
      <div className="m-5 bg-gray-400 p-5">
          <div>{item.title}</div>
          <div>{item.stock}</div>
          <div>{item.price}</div>
          <div>{item.description}</div>
          <figure className='w-80 mt-10 ml-5'><img src={item.image}  /></figure>
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
           
           
         
            
         
          
      </div>
    )
  }
 
 export default Item




