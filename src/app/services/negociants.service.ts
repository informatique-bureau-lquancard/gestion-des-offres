import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataNegociants } from '../components/negociants/tableau-negociants/dataNegociants';
import { TableauNegociantsDataSource } from '../components/negociants/tableau-negociants/tableau-negociants-datasource';
import { NegociantAffiche } from '../models/NegociantAffiche.model';
import { OffreAffiche } from '../models/OffreAffiche.model';
// import { dataNegociants } from '../components/negociants/tableau-negociants/dataNegociants';
import { OffresService } from './offres.service';

@Injectable({
  providedIn: 'root'
})
export class NegociantsService {

  public negociants = new DataNegociants(this.httpClient, this).getNegociantsAffiche();

  negociantsSubject = new Subject<any[]>();

  constructor(public offresService: OffresService, private httpClient: HttpClient) { 
    console.log("NegociantsService");
  }

  // constructor(private offresService: OffresService, private httpClient: HttpClient) { 
  //   console.log("NegociantsService");
  // }

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

      console.log("///negociant switchOnAll : " + negociant.nom)

      negociant.tableauOffres.forEach((idOffre: number) => {

        console.log("///idOffre switchOnAll : " + idOffre)
        this.offresService.getOffreById(idOffre)?.setBSelectionne(true)
      });

    }
    this.emitNegociantsSubject;
  }

  switchOffAll(){
    for(let negociant of this.negociants) {

      negociant.tableauOffres.forEach((idOffre: number) => {

        this.offresService.getOffreById(idOffre)?.setBSelectionne(false)
      });

      negociant.bSelectionne = false,
        this.emitNegociantsSubject;
    }
  }

  switchOnOne(index : number) {

    if(this.getNegociantById(index)?.bSelectionne == true) {
      
      this.switchOffOne(index);
      return;
    }

    this.switchOffAll();

    this.emitNegociantsSubject;

    this.getNegociantById(index)?.tableauOffres.forEach((idOffre: number) => {

      this.offresService.getOffreById(idOffre)?.setBSelectionne(true)
    });

  }

  switchOffOne(index : number) {

    // this.getNegociantById(index)?.bSelectionne = false;

    let negociant : NegociantAffiche | undefined = this.getNegociantById(index);

    if(negociant) {
      negociant.bSelectionne = false;
    }

    // this.negociants[index].bSelectionne = false,
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
