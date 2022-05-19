// export class NegociantBase {
//     constructor (
//                 public id: number,
//                 public pays_id: number,
//                 public type_partenaire_id: number,
//                 public nom: string,
//                 public date_maj: Date,
//                 public date_crea: Date
//                 ) {}
// }

export class NegociantBase {
    constructor (
                public id: number,
                public pays: string,
                public type_partenaire: string,
                public nom: string,
                public date_maj: Date,
                public date_crea: Date
                ) {}
}
