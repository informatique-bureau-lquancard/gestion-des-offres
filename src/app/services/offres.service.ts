import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataOffres } from '../components/tableau-offres/dataOffres';
import { OffreAffiche } from '../models/OffreAffiche.model';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  public offres = new DataOffres(this.httpClient).getOffresAffiche();

  offresSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient) { 
    console.log("OffresService");
  }

  getOffreById(id: number){
    console.log("offre : " + this.offres);

    const offre = this.offres.find(
        (offreObject) => {
          return offreObject.id === id;
        }
    );
    return offre;
  }

  getTableauOffresByNom(partenaire: string){
    console.log("///offres : " + this.offres);

    let tableauOffres: number[] = [];

    let offresAffiches : OffreAffiche[] = this.offres.filter((partenaire_filtre) => partenaire_filtre.partenaire == partenaire );

    offresAffiches.forEach(offreAffiche => {

      console.log("///offreAffiche.id : " + offreAffiche.id);

      tableauOffres.push(offreAffiche.id);

    });

    console.log("///fin offres : " + this.offres);

    return tableauOffres;
  }

  switchOffOne(index : number) {

    if(this.getOffreById(index)?.bSelectionne == true) {
      
      this.switchOffOne(index);
      return;
    }

    let offre : OffreAffiche | undefined = this.getOffreById(index);

    if(offre) {
      offre.bSelectionne = false;
    }

    // this.negociants[index].bSelectionne = false,
    this.emitOffresSubject;
  }

  emitOffresSubject() {
    this.offresSubject.next(this.offres.slice());
  }
}
