import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoCursoRoutingModule } from './contenido-curso-routing.module';
import { ListadoContenidoComponent } from './component/listado-contenido/listado-contenido.component';
import { MaterialModule } from '../material/material.module';
import { ContenidoService } from './shared/service/contenido.service';


@NgModule({
  declarations: [
    ListadoContenidoComponent
  ],
  imports: [
    CommonModule,
    ContenidoCursoRoutingModule,
    MaterialModule
  ],
  providers: [ContenidoService]

})
export class ContenidoCursoModule { }
