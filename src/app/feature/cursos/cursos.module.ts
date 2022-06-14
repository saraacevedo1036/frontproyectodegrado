import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListadoCursosComponent } from './component/listado-cursos/listado-cursos.component';
import { DetalleCursoComponent } from './component/detalle-curso/detalle-curso.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';


@NgModule({
  declarations: [
    ListadoCursosComponent,
    DetalleCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    HttpClientModule,
    Ng2Webstorage.forRoot()
  ]
})
export class CursosModule { }
