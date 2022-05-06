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

  emitOffresSubject() {
    this.offresSubject.next(this.offres.slice());
  }
}
