import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutorizacionService } from './shared/service/autorizacion.service';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule} from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2Webstorage.forRoot()
  ],
  providers : [
    AutorizacionService,
  ]
})
export class LoginModule { }
