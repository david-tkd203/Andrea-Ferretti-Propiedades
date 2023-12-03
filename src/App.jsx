import './App.css'
//importaciones de componentes
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Main>
      <ItemListContainer></ItemListContainer>
    </Main>
    </>
  )
}

export default App
