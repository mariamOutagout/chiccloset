import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Ajouter_Produit } from "../config/ActionTypes"
import { useNavigate } from "react-router-dom";
import "../css/AjouterProduit.css";


function AjouterProduit() {
    const count = useSelector(data=>data.produits.length);
    const [nom, setNom] = useState("");
    const [couleur, setcouleur] = useState("");
    const [prix, setprix] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch({
            type: Ajouter_Produit,
            payload: {
              id: count + 1,
              nom: nom,
              couleur: couleur,
              prix: prix
            }
          });
          
        navigate('/')
    }
    return (
        <div className="ajouter-produit-container">
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
export default AjouterProduit