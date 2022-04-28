import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientInterceptorService implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.retrieve('jwt');
    if(token){
      const cloned = req.clone({
        headers: req.headers.set(`Authorization`,`Bearer ${token}`)
      })
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
