import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guard/login.guard';
import { LoginComponent } from './feature/login/component/login/login.component';

const routes: Routes = [
  {path: '',redirectTo: '/login', pathMatch: 'full'},
  {path:'login',component: LoginComponent,canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
