import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataNegociants } from '../components/negociants/tableau-negociants/dataNegociants';
// import { dataNegociants } from '../components/negociants/tableau-negociants/dataNegociants';
import { OffresService } from './offres.service';

@Injectable({
  providedIn: 'root'
})
export class NegociantsService {
  // private negociants = dataNegociants
  private negociants = new DataNegociants(this.httpClient).getNegociants();

  negociantsSubject = new Subject<any[]>();

  constructor(private offresService: OffresService, private httpClient: HttpClient) { }

  getNegociantById(id: number){
    const negociant = this.negociants.find(
        (negociantObject) => {
          return negociantObject.id === id;
        }
    );
    return negociant;
  }

  switchOnAll(){
    for(let negociant of this.negociants) {
      negociant.bSelectionne = true,

      negociant.tableauOffres.forEach((element: number) => {
        this.offresService.getOffreById(element)?.setBSelectionne(true)
      });

    }
    this.emitNegociantsSubject;
  }

  switchOffAll(){
    for(let negociant of this.negociants) {

      negociant.tableauOffres.forEach((element: number) => {
        this.offresService.getOffreById(element)?.setBSelectionne(false)
      });

      negociant.bSelectionne = false,
        this.emitNegociantsSubject;
    }
  }

  switchOnOne(index : number) {
    this.switchOffAll();
    this.negociants[index].bSelectionne = true,
    this.emitNegociantsSubject;

    this.negociants[index].tableauOffres.forEach((element: number) => {
      this.offresService.getOffreById(element)?.setBSelectionne(true)
    });

  }

  switchOffOne(index : number) {
    this.negociants[index].bSelectionne = false,
    this.emitNegociantsSubject;
  }

  emitNegociantsSubject() {
     this.negociantsSubject.next(this.negociants.slice());
  }

  saveNegociantsToServer() {
    this.httpClient
    .post('https://gestion-des-offres-default-rtdb.europe-west1.firebasedatabase.app//negociants', this.negociants)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur de sauvegarde ! ' + error);
      }
    )
  }


  

}
