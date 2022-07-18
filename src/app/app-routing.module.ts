import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guard/login.guard';
import { SegurityGuard } from './core/guard/segurity-guard.service';
import { RegistrosBlogComponent } from './feature/blog/registros-blog/registros-blog.component';
import { JuegoCursoComponent } from './feature/cursos/component/juego-curso/juego-curso.component';
import { ListadoCursosComponent } from './feature/cursos/component/listado-cursos/listado-cursos.component';
import { PrincipalJuegoComponent } from './feature/cursos/component/principal-juego/principal-juego.component';
import { PrincipalRetoComponent } from './feature/cursos/component/principal-reto/principal-reto.component';
import { RetoCursoComponent } from './feature/cursos/component/reto-curso/reto-curso.component';
import { LoginComponent } from './feature/login/component/login/login.component';
import { RegistroComponent } from './feature/registro/component/registro/registro.component';
import { DocenteComponent } from './feature/usuario/component/docente/docente.component';
import { EstudianteComponent } from './feature/usuario/component/estudiante/estudiante.component';

const routes: Routes = [

   {path:'crearDocente',component: DocenteComponent,canActivate: [SegurityGuard]},
   {path:'crearEstudiante',component: EstudianteComponent,canActivate: [SegurityGuard]},
  {path:'home',component: ListadoCursosComponent,canActivate: [LoginGuard]},
  {path: 'reto', component: RetoCursoComponent },
  {path: 'juego', component: JuegoCursoComponent },
  {path: 'blog', component: RegistrosBlogComponent },
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
