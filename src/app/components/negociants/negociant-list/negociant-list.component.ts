import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Negociant } from 'src/app/models/Negociant.model';
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

    // public getNegociants(): void {
  //   this.negociantsService.getNegociants().subscribe(
  //     (response: Negociant[]) => {
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
      (response: Negociant[]) => {
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
