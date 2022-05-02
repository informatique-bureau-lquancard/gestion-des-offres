//Avant les propriétés personnalisées
//import { Component, OnInit } from '@angular/core';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, Input, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

import { AppareilService } from '../../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit {
  //Avant les propriétés personnalisées
  //appareilName = "Machine à laver";
  @Input() appareilName!: string;

  //Avant les propriétés personnalisées fin
  //appareilStatus = "éteint";

  @Input() appareilStatus!: string;
  @Input() indexOfAppareil!: number;
  @Input() id!: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }
  
  getColor(){
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
    return 'purple';
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }


}
