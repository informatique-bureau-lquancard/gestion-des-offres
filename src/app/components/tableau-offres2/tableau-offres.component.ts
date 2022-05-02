import { Component, OnInit } from '@angular/core';
// import { data } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-grids';
import { Subscription } from 'rxjs';
import { Offre } from 'src/app/models/Offre.model';
import { OffresService } from 'src/app/services/offres.service';
import { PeriodicElement } from './PeriodicElement.model';
// import { tableauDataOffres } from './dataOffres';

// export interface Offre2 {
//   position: number,
//   appellation: string
// }

// const ELEMENT_DATA: Offre2[] = [
//   {position: 1, appellation: "Appelation 1"},
//   {position: 1, appellation: "Appelation 2"}
// ]

// @Component({
//   selector: 'app-tableau-offres',
//   templateUrl: './tableau-offres.component.html',
//   styleUrls: ['./tableau-offres.component.scss']
// })

// export class TableauOffresComponent implements OnInit {

//   displayedColumns: string[] = ['demo-position', 'demo-appellation'];
//   dataSource = ELEMENT_DATA;

//   public pageSettings: PageSettingsModel = { pageSize: 3 };

//   // public offres!: Offre[];

//   public dtOptions : DataTables.Settings = {}

//   offreSubscription!: Subscription;

//   constructor(private offresService: OffresService) { }

//   ngOnInit(): void {
//     // this.offreSubscription = this.offresService.offresSubject
//     // .subscribe(
//     //   (offres: Offre[]) => {
//     //     this.offres = offres;
//     //   }
//     // )
    
//     this.offresService.emitOffresSubject();
    
//     // this.pageSettings = { pageSize: 4 };
//     // this.dataOffres = tableauDataOffres

//     // this.dtOptions = {
//     //   // const that : any = this;

//     //   pagingType: 'full_numbers',
//     //   pageLength: 10,
//     //   serverSide: true,
//     //   processing: true,
//     //   language:{url: "/assets/datatable-French.json"},

//     //   columns: [{ data: 'appellation'}, { data: 'annee'}, { data: 'detail'}]

//     // }

//   }
// }
