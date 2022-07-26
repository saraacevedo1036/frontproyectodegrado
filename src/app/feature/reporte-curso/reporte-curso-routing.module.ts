import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteGuard } from 'src/app/core/guard/docente.guard';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { ListaReporteComponent } from './component/lista-reporte/lista-reporte.component';
import { TablaRetosComponent } from './component/tabla-retos/tabla-retos.component';

const routes: Routes = [{path:'reporte/:idReto', component: ListaReporteComponent, canActivate: [SegurityGuard,DocenteGuard]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteCursoRoutingModule { }
