import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { dataOffres } from '../components/tableau-offres/dataOffres';
import { Offre } from '../models/Offre.model';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  public offres: Offre[] = dataOffres;

  offresSubject = new Subject<any[]>();

  constructor() { 
  }

  getOffreById(id: number){
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
