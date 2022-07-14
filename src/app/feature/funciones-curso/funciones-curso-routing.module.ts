import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { CrearCategoriaComponent } from '../cursos/component/crear-categoria/crear-categoria.component';
import { PrincipalJuegoComponent } from '../cursos/component/principal-juego/principal-juego.component';
import { PrincipalRetoComponent } from '../cursos/component/principal-reto/principal-reto.component';
import { InicioComponent } from './component/inicio/inicio.component';

const routes: Routes = [{path:'lista-juegos', component: PrincipalJuegoComponent, canActivate: [SegurityGuard]},
{path:'lista-reto', component: PrincipalRetoComponent, canActivate: [SegurityGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionesCursoRoutingModule { }
