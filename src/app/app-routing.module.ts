import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guard/login.guard';
import { LoginComponent } from './feature/login/component/login/login.component';
import { RegistroComponent } from './feature/registro/component/registro/registro.component';

const routes: Routes = [
  {path: '',redirectTo: '/login', pathMatch: 'full'},
  {path:'login',component: LoginComponent,canActivate: [LoginGuard]},
  {path:'registro/estudiante',component: RegistroComponent},
  {path:'registro/docente',component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
