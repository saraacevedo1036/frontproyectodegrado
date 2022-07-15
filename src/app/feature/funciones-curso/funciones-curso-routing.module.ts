import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { PrincipalJuegoComponent } from '../cursos/component/principal-juego/principal-juego.component';
import { PrincipalRetoComponent } from '../cursos/component/principal-reto/principal-reto.component';

const routes: Routes = [{path:'cursos/:idCursos/juego', component: PrincipalJuegoComponent, canActivate: [SegurityGuard]},
{path:'cursos/:idCursos/reto', component: PrincipalRetoComponent, canActivate: [SegurityGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionesCursoRoutingModule { }
