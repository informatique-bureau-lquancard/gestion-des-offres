export class Offre {

    constructor (
                public id: number,
                public idNegociant: number,
                public appellation: string,
                public annee: number,
                public formatB: string,
                public prix: number,
                public quantite: number,
                public conditionnement: string,
                public commentaires: string,
                public bSelectionne: boolean
                ) {}


    setBSelectionne(bSelectionne : boolean){
        this.bSelectionne = bSelectionne;
    }
    
}
