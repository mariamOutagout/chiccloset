import { useParams ,useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { Modifier_Produit } from "../config/ActionTypes";
import "../css/ModifierProduit.css";
import { useState } from "react";

function ModifierProduit() {
  const {id}=useParams()
  const produit = useSelector(data=>data.produits.find((u)=>u.id===parseInt(id)));
    const [nom, setNom] = useState(produit.nom);
    const [couleur, setcouleur] = useState(produit.couleur);
    const [prix, setprix] = useState(produit.prix);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
      
        dispatch({
          type: Modifier_Produit,
          payload: {
            id: parseInt(id),
            nom: nom,
            couleur: couleur,
            prix: prix,
          },
        });
    
        navigate('/');
      };
       
    return (
      <div className="modifier-produit-container">
        <form>
            <label>nom</label>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
            <label>couleur</label>
            <input type="text" value={couleur} onChange={(e)=>setcouleur(e.target.value)} />
            <label>prix</label>
<input type="number" value={prix} onChange={(e) => setprix(e.target.value)} />

            <button onClick={handleClick}>Enregistrer</button>
        </form>
        </div>
    )
}

export default ModifierProduit;
