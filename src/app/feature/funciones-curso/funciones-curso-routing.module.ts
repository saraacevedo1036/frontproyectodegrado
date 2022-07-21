import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { PrincipalJuegoComponent } from '../cursos/component/principal-juego/principal-juego.component';
import { PrincipalRetoComponent } from '../cursos/component/principal-reto/principal-reto.component';
import { ListaReporteComponent } from '../reporte-curso/component/lista-reporte/lista-reporte.component';
import { TablaRetosComponent } from '../reporte-curso/component/tabla-retos/tabla-retos.component';
import { ListaEstudianteCursoComponent } from '../usuario/component/lista-estudiante-curso/lista-estudiante-curso.component';

const routes: Routes = [
  {path:'curso/:idCursos/estudiante', component: ListaEstudianteCursoComponent, canActivate: [SegurityGuard]},
  {path:'tablaRetos/:idCursos/reto', component: TablaRetosComponent, canActivate: [SegurityGuard]},
  {path:'cursos/:idCursos/juego', component: PrincipalJuegoComponent, canActivate: [SegurityGuard]},
{path:'cursos/:idCursos/reto', component: PrincipalRetoComponent, canActivate: [SegurityGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionesCursoRoutingModule { }
