import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NegociantsService } from '../../../services/negociants.service';

@Component({
  selector: 'app-negociant-list',
  templateUrl: './negociant-list.component.html',
  styleUrls: ['./negociant-list.component.scss']
})
export class NegociantListComponent implements OnInit {

  negociants!: any[];
  negociantSubscription!: Subscription;

  constructor(protected negociantsService: NegociantsService) { }

  ngOnInit(): void {
    this.negociantSubscription = this.negociantsService.negociantsSubject
    .subscribe(
      (negociants: any[]) => {
        this.negociants = negociants;
      }
    )
    this.negociantsService.emitNegociantsSubject();
  }

  onSelectionnerNegociants() {
    this.negociantsService.switchOnAll();
  }

  onEteindre() {
    this.negociantsService.switchOffAll();
  }

  onSave() {
    this.negociantsService.saveNegociantsToServer();
  }

}
