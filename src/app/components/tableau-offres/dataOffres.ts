import { DatePipe, formatDate } from "@angular/common";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { Timestamp } from "rxjs/internal/operators/timestamp";
import { tap } from "rxjs/operators";
import { OffreAffiche } from "src/app/models/OffreAffiche.model";
import { OffreBase } from "src/app/models/OffreBase.model";
import { environment } from "src/environments/environment";

const dateJour = new Date();

@Component({
  template: ''
})
export class DataOffres implements OnDestroy {

  static offres: OffreAffiche[];
  static offresBase: OffreBase[];

  private apiServeurUrl = environment.apiServeurUrl;

  constructor(private httpClient: HttpClient) {
    console.log("Passe dans constructor")

    console.log("Offre : " + DataOffres.offres);

    if( DataOffres.offres != null ) {
      console.log("Il y a déjà des éléments dans offres");
      console.log("Taille offres !! : " + DataOffres.offres.length)
      return;
    }

    DataOffres.offres = [];
    DataOffres.offresBase = [];

    this.initialisation();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  private initialisation() {

    // DataOffres.offresBase = [
    //   new OffreBase(1, "1", "1", 1, "1", 1, 1.1, "1", "1", dateJour, dateJour),
    //   new OffreBase(2, "2", "2", 2, "2", 2, 2.2, "2", "2", dateJour, dateJour),
    //   new OffreBase(3, "3", "3", 3, "3", 3, 3.3, "3", "3", dateJour, dateJour),
    //   new OffreBase(4, "4", "4", 4, "4", 4, 4.4, "4", "4", dateJour, dateJour)
    // ];
    
    this.initialisationBase();

    setTimeout(()=>{
    console.log("3 Après getNegociants1 ");

    console.log(DataOffres.offresBase);

    DataOffres.offresBase.forEach(element => {

      console.log("Element offre base : " + element.id);
    });

    this.init();

    },5000);
  }

  public initialisationBase(): void {

    this.getObservableNegociants().subscribe(
      (response: OffreBase[]) => {

        response.forEach(element => {

          console.log("Element base : " + element.id);

          console.log("Type : " + typeof(element.date_maj));

          DataOffres.offresBase.push(

            new OffreBase(
              element.id,
              element.partenaire,
              element.vin,
              Number(element.millesime),
              element.format,
              Number(element.quantite),
              Number(element.prix),
              element.conditionnement,
              element.commentaires,
              element.date_maj,
              element.date_crea
            )
          );

          console.log("1 Taille offres !! : " + DataOffres.offres.length);

        });

        // this.setNegociantsBase(response);
        console.log("2 Taille offres !! : " + DataOffres.offres.length);
      },
      (error: HttpErrorResponse) => {
        console.log("Erreurs !!")
        alert(error.message);
      }
        
    )

  }

  getObservableNegociants(): Observable<OffreAffiche[]> {

    return this.httpClient.get<OffreAffiche[]>(this.apiServeurUrl + `/offres_view/all`)
    .pipe(
      tap(data =>
        console.log('All: ' + JSON.stringify(data))));
  }

  public init(): void {

    console.log("Taille offres base : " + DataOffres.offres.length);

    //showAll(negociants : NegociantAffiche[]) : Fonctionnalité à déplacer !!!
    DataOffres.offresBase.forEach(element => {

      console.log("Element offre base : " + element);
    });

    console.log("this.offresBase.length :" + DataOffres.offresBase.length);

    DataOffres.offresBase.forEach(
      element => {

        if( element.id == 1 ) {
          return;
        }

        DataOffres.offres.push(
          new OffreAffiche(
            element.id,
            element.partenaire,
            element.vin, 
            Number(element.millesime),
            element.format,
            Number(element.quantite),
            Number(element.prix),
            element.conditionnement,
            element.commentaires,
            element.date_maj,
            element.date_crea,
            false
          )
        );
      });

    console.log("Taille offres : " + DataOffres.offres.length);

    //showAll(negociants : NegociantAffiche[]) : Fonctionnalité à déplacer !!!
    DataOffres.offres.forEach(element => {

      console.log("element :" + element.id);
    });
  }

  public getOffresAffiche(): OffreAffiche[] {

    console.log("DataOffres.offres : " + DataOffres.offres);

    return DataOffres.offres;
  }

  // async callerFun(){
  //   console.log("Caller");
  //   await this.getObservableNegociants();
  //   console.log("After waiting");
  // }
}
function moment(date_maj: Date) {
  throw new Error("Function not implemented.");
}

