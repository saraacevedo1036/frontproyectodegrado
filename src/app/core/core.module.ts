import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MaterialModule } from '../feature/material/material.module';
import { HttpClientInterceptorService } from './interceptor/http-client-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginModule } from '../feature/login/login.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    LoginModule
  ],
  exports: [
    NavbarComponent
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptorService, multi: true }
  ],
})
export class CoreModule { }
