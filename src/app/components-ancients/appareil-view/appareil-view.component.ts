import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {AppareilService} from "../../services/appareil.service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth = false;

  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
        //Ce test ne sert à rien par contre il aurait servi si date était en paramètre
        if (!(date instanceof Date)) {
				  reject(new Error(`${date} n'est pas un nombre !`));
				  return;
			  }
        resolve(date);
      }, 2000);
  });

  appareils!: any[];
  appareilSubscription!: Subscription;

  constructor(private appareilService: AppareilService) {

  }

  //Avant Subscrive
  /*
  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }
*/
  ngOnInit(){
    this.appareilSubscription = this.appareilService.appareilsSubject
    .subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    )
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    }
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

}
