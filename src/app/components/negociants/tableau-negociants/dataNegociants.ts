import { formatDate } from "@angular/common";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { waitForAsync } from "@angular/core/testing";
import { Observable } from "rxjs";
import { NegociantAffiche } from "src/app/models/NegociantAffiche.model";
import { NegociantBase } from "src/app/models/NegociantBase.model";

const dateJour = new Date();

// export let dataNegociants: NegociantAffiche[] = [];
@Component({
  template: ''
})
// export class DataNegociants implements OnInit {
export class DataNegociants {

  private negociants: NegociantAffiche[] = [];
  private negociantsBase: NegociantBase[] = [];

  // private negociantsBase: NegociantBase[] = [
  //   new NegociantBase(1, 1, 1, "1", dateJour, dateJour),
  //   new NegociantBase(2, 1, 1, "2", dateJour, dateJour),
  //   new NegociantBase(3, 1, 1, "3", dateJour, dateJour),
  //   new NegociantBase(2, 1, 1, "4", dateJour, dateJour)
  // ];

  private apiServeurUrl = `http://127.0.0.1:8080`;

  constructor(private httpClient: HttpClient) {
    console.log("1 Passe dans constructor")

    // Marche
    // this.init(this.negociantsBase);

    this.getNegociants1();
    this.init();
  }

  public getNegociants1(): void {


    this.getNegociants2().subscribe(
      (response: any[]) => {
        // Récupère les négociants mais pas dans le bon format

        //showAll(negociants : NegociantAffiche[]) : Fonctionnalité à déplacer !!!
        // response.forEach(element => {

        //   console.log("2 Element base : " + element.nom);

        //   this.negociantsBase.push(
        //     new NegociantBase(
        //       element.id,
        //       // Number(element.pays_id),
        //       // Number(element.type_partenaire_id),
        //       1,
        //       1,
        //       element.nom,
        //       element.date_maj,
        //       element.date_crea
        //     )
        //   );
        // });

        negociantBase : NegociantBase;

        response.forEach(function (value) {

          
          new NegociantBase(
              value.id,
              // Number(element.pays_id),
              // Number(element.type_partenaire_id),
              1,
              1,
              value.nom,
              value.date_maj,
              value.date_crea
            )

            console.log("2 Element base : " + value.nom);
        });

        console.log("2 Element base : " +  this.negociantsBase.length);

        //   this.negociantsBase.push(
        //     new NegociantBase(
        //       element.id,
        //       // Number(element.pays_id),
        //       // Number(element.type_partenaire_id),
        //       1,
        //       1,
        //       element.nom,
        //       element.date_maj,
        //       element.date_crea
        //     )
        //   );
        // });

        console.log("3 Apres negociant base")

        // this.setNegociantsBase(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

    setTimeout(function(){
      console.log("4 I am the third log after 2 seconds");
    },2000)

    console.log("3,1 Apres negociant base, taille : " + this.negociantsBase.length)

  }

  getNegociants2(): Observable<NegociantBase[]> {

    return this.httpClient.get<NegociantBase[]>(this.apiServeurUrl + `/partenaire/all`);
  }

  public init(): void {

    this.negociants = [];

    console.log("5 Taille negociants base : " + this.negociantsBase.length);

    //showAll(negociants : NegociantAffiche[]) : Fonctionnalité à déplacer !!!
    this.negociantsBase.forEach(element => {

      console.log("6 Element negociation base 2 : " + element.nom);
    });

    console.log("7 Taille negociants base : 2 " + this.negociants.length);


    this.negociants.push(

      new NegociantAffiche(
        1,
        // Number(element.pays_id),
        // Number(element.type_partenaire_id),
        1,
        1,
        "element.nom",
        "source",
        dateJour,
        dateJour,
        false,
        [2]
      )
    );

    console.log("8 this.negociantsBase.length :" + this.negociantsBase.length);

    this.negociantsBase.forEach(
      element => {

        this.negociants.push(
          new NegociantAffiche(
            element.id,
            // Number(element.pays_id),
            // Number(element.type_partenaire_id),
            1,
            1,
            element.nom,
            "source",
            element.date_maj,
            element.date_crea,
            false,
            [2]
          )
        );
      });

    console.log("9 Taille negociants : " + this.negociants.length);

    //showAll(negociants : NegociantAffiche[]) : Fonctionnalité à déplacer !!!
    this.negociants.forEach(element => {

      console.log(element);
    });
  }

  // //Ne fonctionne pas
  // ngOnInit(): void {
  //   console.log("Passe dans init")
  // }

  public getNegociants(): NegociantAffiche[] {
    return this.negociants;
  }

  // // Mettre héritage ou décorateur pour les négociants en entrée
  // public setNegociantsBase(negociantsBase : NegociantBase[]): void {
  //   this.negociantsBase = negociantsBase;
  // }


}

