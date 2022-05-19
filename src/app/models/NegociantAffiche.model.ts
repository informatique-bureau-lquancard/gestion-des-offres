export class NegociantAffiche {
    constructor (
                public id: number,
                public pays: string,
                public type_partenaire: string,
                public nom: string,
                public source: string,
                public date_maj: Date,
                public date_crea: Date,
                public bSelectionne: boolean,
                public tableauOffres: number[]
                ) {}
}
