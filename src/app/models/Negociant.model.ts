// export class Negociant {
//     constructor (
//                 public id: number,
//                 public negociantName: string,
//                 public source: string,
//                 public dateDerniereMAJ: Date,
//                 public bSelectionne: boolean,
//                 public tableau: number[],
//                 ) {}
// }

export class Negociant {
    constructor (
                public id: number,
                public pays_id: number,
                public type_partenaire_id: number,
                public negociantName: string,
                public source: string,
                public dateDerniereMAJ: Date,
                public dateCrea: Date,
                public bSelectionne: boolean,
                public tableauOffres: number[]
                ) {}
}
