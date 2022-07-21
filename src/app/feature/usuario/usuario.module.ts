import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { DocenteComponent } from './component/docente/docente.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ListaEstudianteCursoComponent } from './component/lista-estudiante-curso/lista-estudiante-curso.component';


@NgModule({
  declarations: [
    DocenteComponent,
    EstudianteComponent,
    ListaEstudianteCursoComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UsuarioModule { }
