import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RowHighlightPosition } from 'ag-grid-community';
import { OffreAffiche } from 'src/app/models/OffreAffiche.model';
import { TableauOffresDataSource } from './tableau-offres-datasource';

@Component({
  selector: 'app-tableau-offres',
  templateUrl: './tableau-offres.component.html',
  styleUrls: ['./tableau-offres.component.scss']
})
export class TableauOffresComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<OffreAffiche>;
  dataSource: TableauOffresDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'appellation', 'annee', 'formatB', 'prix', 'quantite', 'conditionnement', 'commentaires', 'bSelectionne'];
  displayedColumns = ['selection', 'id', 'partenaire', 'vin', 'millesime', 'format', 'conditionnement', 'commentaires', 'date_maj', 'operations'];

  constructor(private httpClient: HttpClient) {
    this.dataSource = new TableauOffresDataSource(httpClient);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  // En prévision de pouvoir sélectionner plusieurs lignes afin de les envoyer dans un fichier
  offresSelectionnes: OffreAffiche[] = []

  onSelectionnerLigne(offre: OffreAffiche) {

    // console.log("offresSelectionnes : ")
    // console.log(this.offresSelectionnes)

    if( this.offresSelectionnes != [] && this.offresSelectionnes.includes(offre) ) {

      let index = this.offresSelectionnes.indexOf(offre);
      this.offresSelectionnes.splice(index);

      // console.log("offresSelectionnes : ")
      // console.log(this.offresSelectionnes)
      return;
    }

    this.onSelectionnerOffre(offre.id)
    this.offresSelectionnes.push(offre);
    
  }

  onSelectionnerOffre(idRow: number) {
    //A voir
    console.log(idRow);
  }

  isChecked: boolean = true
}
