import { formatDate } from "@angular/common";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NegociantAffiche } from "src/app/models/NegociantAffiche.model";
import { NegociantBase } from "src/app/models/NegociantBase.model";

const dateJour = new Date();

  // export let dataNegociants: NegociantAffiche[] = [];
  @Component({
    template: ''
  })
  export class DataNegociants implements OnInit {

    private negociants: NegociantAffiche[] = [];
    // private negociants2: NegociantBase[] = [];
 
    private negociants2: NegociantAffiche[] = [
      new NegociantAffiche(1, 1, 1, "1", "1", new Date(), new Date(), false, [1,2]),
      new NegociantAffiche(2, 1, 1, "2", "2", new Date(), new Date(), false, [1]),
      new NegociantAffiche(3, 1, 1, "3", "3", new Date(), new Date(), false, [1,2,3]),
      new NegociantAffiche(2, 1, 1, "4", "4", new Date(), new Date(), false, [2])
    ];

    private apiServeurUrl = `http://127.0.0.1:8080`;

    constructor(private httpClient : HttpClient) {
      console.log("Passe dans constructor")
      // Marche
      this.setNegociants(this.negociants2);

      // this.getNegociants1();
    }

    //Ne fonctionne pas
    ngOnInit(): void {
      console.log("Passe dans init")
      // this.getNegociants1();
      // this.setNegociants(this.negociants2);
    }

    public getNegociants(): NegociantAffiche[] {
      return this.negociants;
    }

    // Mettre héritage ou décorateur pour les négociants en entrée
    public setNegociants(negociants0 : NegociantBase[]): void {

      this.negociants = [];

      negociants0.forEach(element => {

        this.negociants.push(
          new NegociantAffiche(
            element.id,
            Number(element.pays_id),
            Number(element.type_partenaire_id),
            element.nom,
            "source",
            // element.date_maj,
            // element.date_crea,
            dateJour,
            dateJour,
            false,
            [2]
          )
        );
      });

      // this.negociants = negociants;

      //showAll(negociants : NegociantAffiche[]) : Fonctionnalité à déplacer !!!
      this.negociants.forEach(element => {
  
        console.log(element);
      });

      this.negociants = this.negociants2;

      this.negociants.forEach(element => {
  
        console.log(element);
      });

    }

    public getNegociants1(): void {
    
      this.getNegociants2().subscribe(
      (response: NegociantBase[]) => {
        // Récupère les négociants mais pas dans le bon format

        //showAll(negociants : NegociantAffiche[]) : Fonctionnalité à déplacer !!!
        response.forEach(element => {
  
          console.log(element);
        });

        console.log( "type : " + typeof(response) );

        this.setNegociants(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  getNegociants2(): Observable<NegociantAffiche[]> {

    return this.httpClient.get<NegociantAffiche[]>( this.apiServeurUrl + `/partenaire/all`);
  }
}

