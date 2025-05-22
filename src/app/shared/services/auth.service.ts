import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogIn, Iregister } from '../model/register';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  REGISTE_URL: string = `${environment.AUTH_URL}/register`;
  LOGIN_URL: string = `${environment.AUTH_URL}/login`;

  constructor(private _http: HttpClient) {}

  register(RegisterObj: Iregister): Observable<any> {
    return this._http.post(this.REGISTE_URL, RegisterObj);
  }

   //LogIn

  logIn(LogInOBj: ILogIn): Observable<any> {
    return this._http.post<any>(this.LOGIN_URL, LogInOBj);
  }
  //SAveToken

  savetoken(token:string) {
    localStorage.setItem('token', token);
  }
  //Get Tolken
  gettoken() {
    return localStorage.getItem('token');
  }
  //saver UserRole
  saveuserRole(userRole: string) {
    localStorage.setItem('userRole', userRole);
  }
  //GEt userRole

  getuserRole() {
    return localStorage.getItem('userRole');
  }

  //removetoken

  removeToken() {
    localStorage.removeItem('token');
  }
  //removewUrl
  removeuserRole() {
    localStorage.removeItem('userRole');
  }
}
