import { formatDate } from "@angular/common";
import { Negociant } from "src/app/models/Negociant.model";

const dateJour = new Date();

    export let dataNegociants: Negociant[] = [
      new Negociant(1, "1", "1", new Date(), false, [1,2]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(3, "3", "3", new Date(), false, [1,2,3]),
      new Negociant(2, "2", "2", new Date(), false, [2]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1]),
      new Negociant(2, "2", "2", new Date(), false, [1])

    ];

    // export let dataNegociants = [
    //   {
    //     id: 1,
    //     negociantName: "1",
    //     source: "1",
    //     dateDerniereMAJ: formatDate(new Date(),'dd/MM/yyyy', 'fr'),
    //     bSelectionne: false,
    //     tableau: [1,2]
    //   },
    //   {
    //     id: 2,
    //     negociantName: "2",
    //     source: "2",
    //     dateDerniereMAJ: formatDate(new Date(),'dd/MM/yyyy', 'fr'),
    //     bSelectionne: false,
    //     tableau: [1,2,3]
    //   },
    //   {
    //     id: 3,
    //     negociantName: "3",
    //     source: "3",
    //     dateDerniereMAJ: formatDate(new Date(),'dd/MM/yyyy', 'fr'),
    //     bSelectionne: false,
    //     tableau: [1,3]
    //   },
    // ];

