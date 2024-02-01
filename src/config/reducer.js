import { Ajouter_Produit, Modifier_Produit, Supprimer_Produit } from "./ActionTypes";

const initialState = {
    produits: 
      [
        {id:1 , nom: "Robe d'été", couleur: 'Bleu', prix: 39.99 },
          { id:2 , nom: 'Robe de soirée', couleur: 'Noir', prix: 79.99 },
          {id:3 , nom: 'Chemisier', couleur: 'Blanc',  prix: 29.99 },
          {id:4 , nom: 'T-shirt à manches longues', couleur: 'Gris', prix: 19.99 },
        ] 
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case Ajouter_Produit:
        return { ...state, produits: [...state.produits, action.payload] };
      case Modifier_Produit:
        const produit = state.produits.find((u) => u.id === parseInt(action.payload.id));
        if (produit) {
          produit.nom = action.payload.nom;
          produit.couleur = action.payload.couleur;
          produit.prix = action.payload.prix;
        
        }
        return state;
      case Supprimer_Produit:
        return { ...state, produits: [...state.produits.filter((u) => u.id !== parseInt(action.payload))] };
      default:
        return state;
    }
  };
  
  export default reducer;
  