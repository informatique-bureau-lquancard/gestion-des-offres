import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OffresService } from '../../../services/offres.service';

import { PageSettingsModel } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
})
export class OffreListComponent implements OnInit {

  // public pageSettings: PageSettingsModel = { pageSize: 3 };

  offres!: any[];
  offreSubscription!: Subscription;

  constructor(private offresService: OffresService) { }
  // constructor() {}

  ngOnInit(): void {
    this.offreSubscription = this.offresService.offresSubject
    .subscribe(
      (offres: any[]) => {
        this.offres = offres;
      }
    )
    this.offresService.emitOffresSubject();
    // this.pageSettings = { pageSize: 4 };
  }

}
