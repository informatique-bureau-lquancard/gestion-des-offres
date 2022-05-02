import { Component, Input, OnInit } from '@angular/core';
import { OffresService } from 'src/app/services/offres.service';

@Component({
  selector: 'app-single-offre',
  templateUrl: './single-offre.component.html',
  styleUrls: ['./single-offre.component.scss']
})
export class SingleOffreComponent implements OnInit {
  @Input() id!: number;
  @Input() indexOfOffre!: number;

  @Input() appellation!: string;
  @Input() annee!: number;
  @Input() formatB!: string;
  @Input() prix!: number;
  @Input() quantite!: number;
  @Input() conditionnement!: string;
  @Input() commentaires!: string;
  @Input() bSelectionne!: boolean;

  @Input() idNegociant!: number;

  constructor(private offresService: OffresService) { }

  ngOnInit(): void {
  }

  getAppellation(){
    return this.appellation;
  }

  getAnnee(){
    return this.annee;
  }

  getFormatB(){
    return this.formatB;
  }

  getPrix(){
    return this.prix;
  }

  getQuantite(){
    return this.quantite;
  }

  getConditionnement(){
    return this.conditionnement;
  }

  getCommentaires(){
    return this.commentaires;
  }

  getBVisible(){
    return this.bSelectionne;
  }

}
