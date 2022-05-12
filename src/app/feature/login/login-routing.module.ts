import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/core/guard/login.guard';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { HomeComponent } from '../home/component/home/home.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [  {
  path:'', component: LoginComponent,canActivate: [LoginGuard]
},
{
  path:'home',component: HomeComponent, canActivate: [SegurityGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
