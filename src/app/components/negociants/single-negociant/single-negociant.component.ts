import { Component, Input, OnInit } from '@angular/core';
import { NegociantsService } from 'src/app/services/negociants.service';

@Component({
  selector: 'app-single-negociant',
  templateUrl: './single-negociant.component.html',
  styleUrls: ['./single-negociant.component.scss'],
  //Améliore la rapidité en ne revérifiant pas l'objet
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleNegociantComponent implements OnInit {
  @Input() nom!: string;
  @Input() source!: string;
  //A changer en date
  @Input() date_maj!: Date;
  @Input() bSelectionne!: boolean;
  
  @Input() indexOfNegociant!: number;
  @Input() id!: number;

  constructor(private negociantsService: NegociantsService) {}

  ngOnInit(): void {
  }

  getNom(){
    return this.nom;
  }

  getSource(){
    return this.source;
  }

  getDateMAJ(){
    return this.date_maj;
  }

  getStatus(){
    return this.bSelectionne;
  }

  // on a déjà le status !!!

  // Changer cette méthode en test du status
  getColor(){
    if(this.bSelectionne === true) {
      return 'green';
    } else if(this.bSelectionne === false) {
      return 'red';
    }
    return 'purple';
  }

  onSelectionnerNegociant() {
    console.log("10 onSelectionnerNegociant idRow : " + this.indexOfNegociant.toString())

    this.negociantsService.switchOnOne(this.indexOfNegociant);
  }

}
