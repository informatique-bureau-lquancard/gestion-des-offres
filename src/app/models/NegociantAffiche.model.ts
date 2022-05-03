export class NegociantAffiche {
    constructor (
                public id: number,
                public pays_id: number,
                public type_partenaire_id: number,
                public nom: string,
                public source: string,
                public date_maj: Date,
                public date_crea: Date,
                public bSelectionne: boolean,
                public tableauOffres: number[]
                ) {}
}
