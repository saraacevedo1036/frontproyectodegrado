import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/core/guard/login.guard';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { ListadoCursosComponent } from '../cursos/component/listado-cursos/listado-cursos.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [  {
  path:'', component: LoginComponent,canActivate: [LoginGuard]
},

{
  path:'listado-cursos',component: ListadoCursosComponent, canActivate: [SegurityGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
