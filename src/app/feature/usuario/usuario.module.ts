import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { DocenteComponent } from './component/docente/docente.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';


@NgModule({
  declarations: [
    DocenteComponent,
    EstudianteComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
