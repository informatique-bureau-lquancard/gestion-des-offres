//Avant Observable
//import { Component } from '@angular/core';
//Rooting
/*
import { Component, OnInit } from '@angular/core';

import {AppareilService} from "./services/appareil.service";
*/

import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//Avant les Observables
/*
export class AppComponent {
  constructor() {}
}
*/

export class AppComponent implements OnInit, OnDestroy {

  secondes!: number;
  counterSubscription!: Subscription;

  ngOnInit() {
    const counter = interval(1000);

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }
  
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}

//Avant Routing : Tout le contenu a été déplacé dans le component appareil-view
//export class AppComponent implements OnInit {

  //title = 'Awesome app';

  //Routing
  //isAuth = false;

  //Avant Pipe async
  //lastUpdate = new Date();

  //Routing
  /*
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
*/
  //Avant directives structurelles
  /*
  appareilOne = "Machine à laver";
  appareilTwo = "Télévision";
  appareilThree = "Ordinateur";
  */

  //Avant les services
    /*appareils = [
      {
        nom: "Machine à laver",
        status: "éteint"
      },
      {
        nom: "Télévision",
        status: "allumé"
      },
      {
        nom: "Ordinateur",
        status: "éteint"
      },
    ];*/

    //Routing
    //appareils!: any[];

  //Avant les services
  /*constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }*/

  //Routing
  /*
  constructor(private appareilService: AppareilService) {
  setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }
*/
  //Avant les services
  /*onAllumer() {
    console.log("On allume tout !");
  }*/

  //Rooting
  /*
  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }
*/
//}
