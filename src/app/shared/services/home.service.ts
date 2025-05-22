import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  BASE_URL: string = `${environment.BASE_URL}`;
  PRODUCT_URL: string = `${this.BASE_URL}/products`;

  constructor(private _http: HttpClient) {}


  fetchAllProduct(): Observable<any> {
    return this._http.get<any>(this.PRODUCT_URL);
  }
}
