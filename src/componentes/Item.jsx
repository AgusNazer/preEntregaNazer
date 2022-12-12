import { Link } from "react-router-dom"
import React from "react"
/* import products from "./mock/products" */

/* export const shoes = [
  {
     id: 1 ,
     category:"Running",
     title:"Nike running" , 
     description: "The ultimate techologie, high speed", 
     price: 'U$ 149' , 
     image:"https://www.mensjournal.com/wp-content/uploads/2021/12/NikeAlphaflyMain1.jpg?quality=86&strip=all" ,
     Stock: 12
    },
  {id: 2 , category:"Crossfit",title:"Nike metcon" , description: "you really train hard? you need this one", price: 'U$ 160' , image:"https://9b6e8d.cdn.akinoncloud.com/products/2022/09/22/914478/1df358c0-a362-4548-a8b2-1b733cadef4e_size632x632_cropCenter.jpg" , Stock: 10},
  {id: 3 , category:"Trainning",title:"Nike training" , description: "Versatiliy, high performans", price: 'U$ 120' , image:"https://barcin.akinoncdn.com/products/2022/09/20/1051370/8e1b8a21-9baf-4dd3-9991-6b44d282dbad_size480x480_cropCenter.jpg" , Stock: 7},
  {id: 4 , category:"Urban", title:"Nike" , description: "Style", price: 'U$ 110' , image:"https://barcin.akinoncdn.com/products/2022/09/21/913378/e110042a-312f-4e58-9270-1692b2d49ec5_size480x480_cropCenter.jpg" , Stock: 8},
  {id: 5 , category:"Urban", title:"Nike " , description: "Style", price: 'U$ 110' , image:"https://barcin.akinoncdn.com/products/2022/09/21/913378/e110042a-312f-4e58-9270-1692b2d49ec5_size480x480_cropCenter.jpg" , Stock: 8},

]; */


 const Item = ( {title, stock, id, price,image} ) => {


    return (
      <div className="m-5 bg-gray-400 p-5 Item ">
          <div>{title}</div>
          <div>{stock}</div>
          <div>{price}</div>
          <figure className='w-80 mt-10 m-5 ml-5 imagen_container '><img src={image}  /></figure>
          <Link to={`/preEntregaNazer/item/${id}`} className="btn btn-info">Ver Detalles</Link> 
           
          
      </div>
    )
  }

 export default Item










 