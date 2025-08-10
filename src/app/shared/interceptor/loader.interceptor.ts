import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private _loaderservice:LoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // loader start
    this._loaderservice.emmitloader(true)
    console.log('stART');
    
    let requstclone = request.clone({
      setHeaders: {
        'contet-type': 'Apllication/json',
        'auth': 'Token form Local storage'
      }
    })

    return next.handle(requstclone).pipe(
    finalize(()=>{
      this._loaderservice.emmitloader(false)
      console.log('stop');
      
    })
    );
  }
}
