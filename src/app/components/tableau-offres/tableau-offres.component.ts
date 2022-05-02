import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RowHighlightPosition } from 'ag-grid-community';
import { Offre } from 'src/app/models/Offre.model';
import { TableauOffresDataSource } from './tableau-offres-datasource';

@Component({
  selector: 'app-tableau-offres',
  templateUrl: './tableau-offres.component.html',
  styleUrls: ['./tableau-offres.component.scss']
})
export class TableauOffresComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Offre>;
  dataSource: TableauOffresDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'appellation', 'annee', 'formatB', 'prix', 'quantite', 'conditionnement', 'commentaires', 'bSelectionne'];
  displayedColumns = ['selection', 'id', 'appellation', 'annee', 'formatB', 'prix', 'quantite', 'conditionnement', 'commentaires', 'operations'];

  constructor() {
    this.dataSource = new TableauOffresDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  offreSelectionne!: Offre

  onSelectionnerLigne(offre: Offre) {

    this.onSelectionnerOffre(offre.id)
    this.offreSelectionne = offre;
    
  }

  onSelectionnerOffre(idRow: number) {
    //A voir
    console.log(idRow);
  }

  isChecked: boolean = true
}
