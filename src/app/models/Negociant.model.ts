export class Negociant {
    constructor (
                public id: number,
                public negociantName: string,
                public source: string,
                public dateDerniereMAJ: Date,
                public bSelectionne: boolean,
                public tableau: number[],
                ) {}
}
