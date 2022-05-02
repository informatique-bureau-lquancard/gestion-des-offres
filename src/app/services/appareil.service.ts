import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AppareilService {

    private appareils = [
      {
        id: 1,
        nom: "Machine à laver",
        status: "éteint"
      },
      {
        id: 2,
        nom: "Télévision",
        status: "allumé"
      },
      {
        id: 3,
        nom: "Ordinateur",
        status: "éteint"
      },
    ];

    appareilsSubject = new Subject<any[]>();

    constructor(private httpClient: HttpClient) { }

    getAppareilById(id: number){
      const appareil = this.appareils.find(
          (appareilObject) => {
            return appareilObject.id === id;
          }
      );
      return appareil;
  }
 
    switchOnAll(){
        for(let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject;
    }

    switchOffAll(){
        for(let appareil of this.appareils) {
            appareil.status = 'éteint';
            this.emitAppareilSubject;
        }
    }

    switchOnOne(index : number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject;
    }

    switchOffOne(index : number) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject;
    }

    emitAppareilSubject() {
      this.appareilsSubject.next(this.appareils.slice());
    }

    addAppareil(name: string, status: string) {
      const appareilObject = {
        id: 0,
        nom: '',
        status: ''
      };
      appareilObject.nom = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
    }

    saveAppareilsToServer() {
      this.httpClient
        .put('https://http-client-demo-a044d-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
        .subscribe(
          () => {
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }

    getAppareilsFromServer() {
      this.httpClient
        .get<any[]>('https://http-client-demo-a044d-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
        .subscribe(
          (response) => {
            this.appareils = response;
            this.emitAppareilSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }
}


