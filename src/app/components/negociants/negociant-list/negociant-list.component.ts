import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NegociantAffiche } from 'src/app/models/NegociantAffiche.model';
import { NegociantsService } from '../../../services/negociants.service';

@Component({
  selector: 'app-negociant-list',
  templateUrl: './negociant-list.component.html',
  styleUrls: ['./negociant-list.component.scss']
})
export class NegociantListComponent implements OnInit {

  negociants!: NegociantAffiche[];
  negociantSubscription!: Subscription;

  constructor(protected negociantsService: NegociantsService) { }

    // public getNegociants(): void {
  //   this.negociantsService.getNegociants().subscribe(
  //     (response: NegociantAffiche[]) => {
  //       this.negociants = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }

  public getNegociants(): void {
    this.negociantSubscription = this.negociantsService.negociantsSubject
    .subscribe(
      (response: NegociantAffiche[]) => {
        this.negociants = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    this.negociantsService.emitNegociantsSubject();
  }

  ngOnInit(): void {
    this.getNegociants();
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
