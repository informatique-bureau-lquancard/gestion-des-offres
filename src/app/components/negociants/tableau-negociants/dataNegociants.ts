import { formatDate } from "@angular/common";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Negociant } from "src/app/models/Negociant.model";

const dateJour = new Date();

// export let dataNegociants: Negociant[] = [
//   new Negociant(1, 1, 1, "1", "1", new Date(), new Date(), false, [1,2]),
//   new Negociant(2, 1, 1, "2", "2", new Date(), new Date(), false, [1]),
//   new Negociant(3, 1, 1, "3", "3", new Date(), new Date(), false, [1,2,3]),
//   new Negociant(2, 1, 1, "4", "4", new Date(), new Date(), false, [2])
// ];

  // export let dataNegociants: Negociant[] = [];
  @Component({
    template: ''
  })
  export class DataNegociants implements OnInit {

    // private negociants: Negociant[] = [];
 
    private negociants: Negociant[] = [
      new Negociant(1, 1, 1, "1", "1", new Date(), new Date(), false, [1,2]),
      new Negociant(2, 1, 1, "2", "2", new Date(), new Date(), false, [1]),
      new Negociant(3, 1, 1, "3", "3", new Date(), new Date(), false, [1,2,3]),
      new Negociant(2, 1, 1, "4", "4", new Date(), new Date(), false, [2])
    ];

    // private negociants2: Negociant[] = [
    //   new Negociant(1, 1, 1, "1", "1", new Date(), new Date(), false, [1,2]),
    //   new Negociant(2, 1, 1, "2", "2", new Date(), new Date(), false, [1]),
    //   new Negociant(3, 1, 1, "3", "3", new Date(), new Date(), false, [1,2,3]),
    //   new Negociant(2, 1, 1, "4", "4", new Date(), new Date(), false, [2])
    // ];

    private negociants2: Negociant[] = [];

    private apiServeurUrl = `http://127.0.0.1:8080`;

    constructor(private httpClient : HttpClient) {}

    ngOnInit(): void {
      // this.getNegociants1();
      this.setNegociants(this.negociants2);
    }

    public getNegociants(): Negociant[] {
      return this.negociants;
    }

    public setNegociants(negociants : Negociant[]): void {
      this.negociants = negociants;
    }

    public getNegociants1(): void {
    
      this.getNegociants2().subscribe(
      (response: Negociant[]) => {

        console.log( "réponse : " + response);
        console.log( "type : " + typeof(response) );

        this.negociants = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  getNegociants2(): Observable<Negociant[]> {

    // AppRoutingModule.apiServeurUrl
    // return this.httpClient.get<Negociant[]>( this.apiServeurUrl + `/partenaire/all`, { headers } );
    return this.httpClient.get<Negociant[]>( this.apiServeurUrl + `/partenaire/all`);
  }
}

