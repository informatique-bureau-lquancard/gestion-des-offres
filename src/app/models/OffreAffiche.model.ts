export class OffreAffiche {

    constructor (

        public id: number,
        public partenaire: string,
        public vin: string,
        public millesime: number,
        public format : string,
        public prix: number,
        public quantite: number,
        public conditionnement: string,
        public commentaires: string,
        public date_maj: Date,
        public date_crea: Date,
        public bSelectionne: boolean
        ) {} 

    setBSelectionne(bSelectionne : boolean){

        console.log("bSelectionne : " + bSelectionne);
        this.bSelectionne = bSelectionne;
    }
    
}
