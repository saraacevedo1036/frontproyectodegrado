import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoCursoRoutingModule } from './contenido-curso-routing.module';
import { ListadoContenidoComponent } from './component/listado-contenido/listado-contenido.component';
import { MaterialModule } from '../material/material.module';
import { ContenidoService } from './shared/service/contenido.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoContenidoComponent
  ],
  imports: [
    CommonModule,
    ContenidoCursoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [ContenidoService]

})
export class ContenidoCursoModule { }
