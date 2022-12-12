

import './App.css'
import NavBar from './componentes/NavBar'
import './componentes/NavBar.css'
import ItemListContainer from './componentes/ItemListContainer'
import './componentes/ItemListContainer.css'
import ItemDetailContainer from './componentes/ItemDetailContainer' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './componentes/ItemCount.css'
import './componentes/Item.css'
import './componentes/ItemList.css'


function App() {
  

    return (
      <BrowserRouter>
          <div className='app'>
         
            <NavBar/>
        <Routes>
           <Route path='/preEntregaNazer/' element={<ItemListContainer greeting='Welcome to shoos shop' />} />  
           <Route path='/preEntregaNazer/item/:id' element={<ItemDetailContainer />}/> 
           <Route path='/preEntregaNazer/category/:idCategory' element={<ItemListContainer/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    
      )
    }
    
    export default App