import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteCursoRoutingModule } from './reporte-curso-routing.module';
import { TablaRetosComponent } from './component/tabla-retos/tabla-retos.component';
import { ListaReporteComponent } from './component/lista-reporte/lista-reporte.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { materialize } from 'rxjs';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    TablaRetosComponent,
    ListaReporteComponent,
  ],
  imports: [
    CommonModule,
    ReporteCursoRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ReporteCursoModule { }
