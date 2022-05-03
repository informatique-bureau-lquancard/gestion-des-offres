import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Negociant } from 'src/app/models/Negociant.model';
import { HttpClient } from '@angular/common/http';
import { DataNegociants } from './dataNegociants';
// import { dataNegociants } from '../components/negociants/tableau-negociants/dataNegociants';

/**
 * Data source for the TableauNegociants view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */

export class TableauNegociantsDataSource extends DataSource<Negociant> {
  // private negociants = dataNegociants
  public negociants = new DataNegociants(this.httpClient).getNegociants();
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private httpClient: HttpClient) {
    super();
  }

  // constructor() {
  //   super();
  // }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Negociant[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.negociants), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
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
  private getPagedData(negociants: Negociant[]): Negociant[] {
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
  private getSortedData(negociants: Negociant[]): Negociant[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return negociants;
    }

    return negociants.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'negociantName': return compare(a.negociantName, b.negociantName, isAsc);
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
