import {Ajouter_Produit, Supprimer_Produit, Modifier_Produit} from "./ActionTypes";

export const ajouter_Produit = (produit) => {
    return {type: Ajouter_Produit, payload: produit}
}

export const modifier_Produit = (nouvelleproduit) => {
    return {type: Modifier_Produit, payload: nouvelleproduit}
}

export const supprimer_Produit = (id) => {
    return {type: Supprimer_Produit, 
    payload: id}
}
