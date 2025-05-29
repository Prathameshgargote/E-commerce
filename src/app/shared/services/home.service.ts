import { Injectable } from '@angular/core';
import { expand, forkJoin, map, Observable, of, reduce, takeWhile } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../model/product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

 getAllcatgory(): Observable<any[]> {
  const allProducts: any[] = [];
  const maxPages = 33; // if you know totalPages

  const requests = [];

  for (let i = 1; i <= maxPages; i++) {
    const url = `https://ecom-backend-omega-six.vercel.app/products?page=${i}&limit=10`;
    requests.push(this._http.get<any>(url));
  }

  return forkJoin(requests).pipe(
    map((responses) => {
      responses.forEach(res => {
        allProducts.push(...res.data);
      });
      return allProducts;
    })
  );
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
  // getAllProducts(): Observable<any[]> {
  //   let page = 1;

  //   return this._http
  //     .get<any>(`${this.PRODUCT_URL}?page=${page}&limit=${this.pageSize}`)
  //     .pipe(
  //       expand((response: any, i) => {
  //         const items = response.products || [];
  //         if (items.length < this.pageSize) return of({ products: [] });
  //         page++;
  //         return this._http.get<any>(
  //           `${this.PRODUCT_URL}?page=${page}&limit=${this.pageSize}`
  //         );
  //       }),
  //       takeWhile((response) => (response.products || []).length > 0, true),
  //       reduce((acc, response) => acc.concat(response.products || []), [])
  //     );
  // }

  getAllProducts(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this._http.get<any>(this.PRODUCT_URL, { params });
  }

  getproductbycat(category: string, subcategory: string): Observable<any> {
    const params = new HttpParams()
      .set('category', category )
      // .set('subcategory', subcategory);
    return this._http.get<any>(`${this.PRODUCT_URL}/filter`, { params });
  }
}
