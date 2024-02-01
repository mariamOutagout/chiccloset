import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AjouterProduit from './crudproduits/AjouterProduits';
import ModifierProduit from './crudproduits/ModifierProduit';
import ListProduit from './crudproduits/ListProduit';
function App() {
  return (
    <div style={{paddingLeft:40}}>
      <h1>CRUD REACT-REDUX Example 1</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListProduit />} />
          <Route path='/AjouterProduit' element={<AjouterProduit />} />
          <Route path='/ModifierProduit/:id' element={<ModifierProduit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;