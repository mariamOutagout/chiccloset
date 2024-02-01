import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { supprimer_Produit } from '../config/ActionCreater'; 
import "../css/ListProduit.css"

function ProduitList() {
  const produits = useSelector((data) => data.produits); 
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(supprimer_Produit(id)); 
  }

  return (
    <div>
      <p>
        <Link to="/AjouterProduit">
          <button>Ajouter Produit</button>
        </Link>
      </p>
      <table>
        <thead>
          <tr>
          <td>id</td>
            <td>Nom</td>
            <td>Couleur</td>
            <td>Prix</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {produits.map((produit) => {
            return (
              <tr key={produit.id}>
                  <td>{produit.id}</td>
                <td>{produit.nom}</td>
                <td>{produit.couleur}</td>
                <td>{produit.prix}</td>
                <td>
                  <Link to={`/ModifierProduit/${produit.id}`}>
                    <button>modifier</button>
                  </Link>
                  <button onClick={() => handleDelete(produit.id)}>supprimer</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProduitList;
