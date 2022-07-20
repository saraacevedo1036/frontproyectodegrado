import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteCursoRoutingModule } from './reporte-curso-routing.module';
import { ReporteEstudianteComponent } from './component/reporte-estudiante/reporte-estudiante.component';


@NgModule({
  declarations: [
    ReporteEstudianteComponent
  ],
  imports: [
    CommonModule,
    ReporteCursoRoutingModule
  ]
})
export class ReporteCursoModule { }
