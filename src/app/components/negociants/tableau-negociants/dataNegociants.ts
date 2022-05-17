import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { NegociantAffiche } from "src/app/models/NegociantAffiche.model";
import { NegociantBase } from "src/app/models/NegociantBase.model";
import { NegociantsService } from "src/app/services/negociants.service";
import { environment } from "src/environments/environment";

@Component({
  template: ''
})
export class DataNegociants implements OnDestroy {

  static negociants: NegociantAffiche[];
  static negociantsBase: NegociantBase[];

  private apiServeurUrl = environment.apiServeurUrl;

  constructor(private httpClient: HttpClient, private negociantsService : NegociantsService) {
    console.log("Passe dans constructor")

    if( DataNegociants.negociants != null ) {
      // console.log("Il y a déjà des éléments dans negociants");
      // console.log("Taille negociants !! : " + DataNegociants.negociants.length)
      return;
    }

    DataNegociants.negociants = [];
    DataNegociants.negociantsBase = [];

    this.initialisation();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  private initialisation() {

    DataNegociants.negociantsBase = [
      new NegociantBase(1, 1, 1, "1", new Date(), new Date()),
      new NegociantBase(2, 2, 2, "2", new Date(), new Date()),
      new NegociantBase(3, 1, 2, "3", new Date(), new Date()),
      new NegociantBase(4, 1, 4, "4", new Date(), new Date()),
      new NegociantBase(5, 5, 5, "5", new Date(), new Date())
    ];
    
    // this.initialisationBase();

    setTimeout(()=>{
    // console.log("3 Après getNegociants1 ");

    // console.log(DataNegociants.negociantsBase);

    DataNegociants.negociantsBase.forEach(element => {

      // console.log("Element negociation base : " + element.nom);
    });

    this.init();

    },5000);
  }

  public initialisationBase(): void {

    this.getObservableNegociants().subscribe(
      (response: NegociantBase[]) => {

        response.forEach(element => {

          // console.log("Element base : " + element.nom);

          DataNegociants.negociantsBase.push(
            new NegociantBase(
              element.id,
              Number(element.pays_id),
              Number(element.type_partenaire_id),
              element.nom,
              element.date_maj,
              element.date_crea
            )
          );

          // console.log("1 Taille negociants !! : " + DataNegociants.negociants.length);

        });

        // this.setNegociantsBase(response);
        // console.log("2 Taille negociants !! : " + DataNegociants.negociants.length);
      },
      (error: HttpErrorResponse) => {
        console.log("Erreurs !!")
        alert(error.message);
      }
       
    )

  }

  getObservableNegociants(): Observable<NegociantAffiche[]> {

    return this.httpClient.get<NegociantAffiche[]>(this.apiServeurUrl + `/partenaire/all`)
    .pipe(
      tap(data =>
        console.log('All: ' + JSON.stringify(data))));
  }

  public init(): void {

    // console.log("Taille negociants base : " + DataNegociants.negociants.length);

    //showAll(negociants : NegociantAffiche[]) : Fonctionnalité à déplacer !!!
    DataNegociants.negociantsBase.forEach(element => {

      // console.log("Element negociation base : " + element);
    });

    // console.log("this.negociantsBase.length :" + DataNegociants.negociantsBase.length);

    DataNegociants.negociantsBase.forEach(
      element => {

        if( element.id == 1 ) {
          return;
        }

        // DataNegociants.negociants.push(
        //   new NegociantAffiche(
        //     element.id,
        //     Number(element.pays_id),
        //     Number(element.type_partenaire_id),
        //     element.nom,
        //     "source",
        //     element.date_maj,
        //     element.date_crea,
        //     false,
        //     [2]
        //   )
        // );

        DataNegociants.negociants.push(
          new NegociantAffiche(
            element.id,
            Number(element.pays_id),
            Number(element.type_partenaire_id),
            element.nom,
            "source",
            element.date_maj,
            element.date_crea,
            false,
            this.negociantsService.offresService.getTableauOffresByNom( element.nom )
          )
        );
      });

    // console.log("Taille negociants : " + DataNegociants.negociants.length);

    //showAll(negociants : NegociantAffiche[]) : Fonctionnalité à déplacer !!!
    DataNegociants.negociants.forEach(element => {

      // console.log(element);
    });
  }

  public getNegociantsAffiche(): NegociantAffiche[] {
    return DataNegociants.negociants;
  }

  // async callerFun(){
  //   console.log("Caller");
  //   await this.getObservableNegociants();
  //   console.log("After waiting");
  // }
}





