

import './App.css'
import NavBar from './componentes/NavBar'
import './componentes/NavBar.css'
import ItemListContainer from './componentes/ItemListContainer'
import './componentes/ItemListContainer.css'
import Layout from './componentes/Layout'


function App() {
  

  return (
    <div>
      <div className='app'>
        <NavBar/>
        <ItemListContainer greeting={' Welcome to Shoos Ecommerce'} />
      </div>
      <div>
      <Layout/>
      </div>  
    </div>

  )
}

export default App
