import { Injectable } from '@angular/core';
import { expand, Observable, of, reduce, takeWhile } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  BASE_URL: string = `${environment.BASE_URL}`;
  PRODUCT_URL: string = `${this.BASE_URL}/products`;
private pageSize = 10;
  constructor(private _http: HttpClient) {}


  fetchAllProduct(): Observable<any> {
    return this._http.get<any>(this.PRODUCT_URL);
  }


  // getAllProducts(): Observable<any[]> {
  //   let page = 1;

  //   return this._http.get<any[]>(`${this.PRODUCT_URL}?page=${page}&limit=${this.pageSize}`).pipe(

  //     // expand lets us make recursive API calls
  //     expand((data: any[], i) => {
  //       if (data.length < this.pageSize) return of([]); // no more data → stop
  //       page++; // next page
  //       return this._http.get<any[]>(`${this.PRODUCT_URL}?page=${page}&limit=${this.pageSize}`);
  //     }),

  //     // continue only while there is data
  //     takeWhile((data) => data.length > 0, true),

  //     // collect all responses into a single array
  //     reduce((acc, data) => acc.concat(data), [])
  //   );
  // }
  getAllProducts(): Observable<any[]> {
  let page = 1;

  return this._http.get<any>(`${this.PRODUCT_URL}?page=${page}&limit=${this.pageSize}`).pipe(
    expand((response: any, i) => {
      const items = response.products || [];
      if (items.length < this.pageSize) return of({ products: [] });
      page++;
      return this._http.get<any>(`${this.PRODUCT_URL}?page=${page}&limit=${this.pageSize}`);
    }),
    takeWhile(response => (response.products || []).length > 0, true),
    reduce((acc, response) => acc.concat(response.products || []), [])
  );
}



}
