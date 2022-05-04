import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { NegociantAffiche } from 'src/app/models/NegociantAffiche.model';
import { NegociantsService } from 'src/app/services/negociants.service';
import { NegociantListComponent } from '../negociant-list/negociant-list.component';
import { TableauNegociantsDataSource} from './tableau-negociants-datasource';

@Component({
  selector: 'app-tableau-negociants',
  templateUrl: './tableau-negociants.component.html',
  styleUrls: ['./tableau-negociants.component.scss']
})
export class TableauNegociantsComponent extends NegociantListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<NegociantAffiche>;
  dataSource: TableauNegociantsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'negociantName', 'source', 'dateDerniereMAJ', 'bSelectionne'];
  displayedColumns = ['id', 'negociantName', 'source', 'dateDerniereMAJ'];

  constructor(protected negociantsService: NegociantsService, private httpClient: HttpClient) {
    super(negociantsService);

    // this.negociants.forEach(element => {
  
    //   console.log(element);
    // });
    
    this.dataSource = new TableauNegociantsDataSource(httpClient);
    // this.dataSource = new TableauNegociantsDataSource(httpClient, negociantsService);
  }

  // constructor(protected negociantsService: NegociantsService) {
  //   super(negociantsService);
  //   this.dataSource = new TableauNegociantsDataSource();
  // }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  negociantSelectionne!: NegociantAffiche

  onSelectionnerLigne(negociant: NegociantAffiche) {

    this.onSelectionnerNegociant(negociant.id)
    this.negociantSelectionne = negociant;
    
  }

  onSelectionnerNegociant(idRow: number) {
    this.negociantsService.switchOnOne(idRow);
  }

}
