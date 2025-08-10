import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
private loaderSub$:BehaviorSubject<any>=new BehaviorSubject(false) 
  loderObs:Observable<any>=this.loaderSub$.asObservable()
  constructor() { }
emmitloader(flag:boolean){
  return this.loaderSub$.next(flag)
}

}
