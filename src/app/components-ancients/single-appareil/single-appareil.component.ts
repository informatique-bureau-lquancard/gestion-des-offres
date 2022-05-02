import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppareilService } from '../../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name: string = 'Appareil';
  status: string = 'Status';

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }


//Avant changement dans appareil.service.ts pour les id
/*
  ngOnInit(): void {
    this.name = this.route.snapshot.params['id'];
  }
*/

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    
    this.name = this.appareilService.getAppareilById(+id)!.nom;
    this.status = this.appareilService.getAppareilById(+id)!.status;
  }

}


