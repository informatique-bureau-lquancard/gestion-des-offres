export class Offre {

    constructor (
                public id: number,
                // public idNegociant: number,
                public partenaire_vendeur_id: number,
                // public appellation: string,
                public vin_id: number,
                // public annee: number,
                public millesime_id: number,
                // public formatB: string,
                public format_id : number,
                public prix: number,
                public quantite: number,
                // public conditionnement: string,
                public conditionnement_id: number,
                public commentaires: string,
                public date_maj: Date,
                public date_crea: Date,
                ) {} 
}
