import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { NegociantAffiche } from 'src/app/models/NegociantAffiche.model';
import { HttpClient } from '@angular/common/http';
import { DataNegociants } from './dataNegociants';
import { NegociantsService } from 'src/app/services/negociants.service';
// import { dataNegociants } from '../components/negociants/tableau-negociants/dataNegociants';

/**
 * Data source for the TableauNegociants view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */

export class TableauNegociantsDataSource extends DataSource<NegociantAffiche> {

  public negociants = new DataNegociants(this.httpClient).getNegociantsAffiche();
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private httpClient: HttpClient) {
    super();
    console.log("TableauNegociantsDataSource");
  }

  // constructor(private httpClient: HttpClient, protected negociantsService: NegociantsService) {
  //   super();
  // }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<NegociantAffiche[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.

      // return merge(observableOf(this.negociantsService.negociants), this.paginator.page, this.sort.sortChange)

      return merge(observableOf(this.negociants), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {

          // return this.getPagedData(this.getSortedData([...this.negociantsService.negociants ]));
          return this.getPagedData(this.getSortedData([...this.negociants ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(negociants: NegociantAffiche[]): NegociantAffiche[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return negociants.splice(startIndex, this.paginator.pageSize);
    } else {
      return negociants;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(negociants: NegociantAffiche[]): NegociantAffiche[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return negociants;
    }

    return negociants.sort((a, b) => {
      
      const isAsc = this.sort?.direction === 'asc';
      
      switch (this.sort?.active) {
        case 'nom': return compare(a.nom, b.nom, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
