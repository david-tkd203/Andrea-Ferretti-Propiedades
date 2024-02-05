import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/navbar/Navbar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/" element={<ItemListContainer />} />
      </Routes>
    </Router>
  );
}

export default App;





