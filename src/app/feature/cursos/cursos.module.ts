import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListadoCursosComponent } from './component/listado-cursos/listado-cursos.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { ListadoCategoriasComponent } from './component/listado-categorias/listado-categorias.component';
import { CursoService } from './shared/service/curso.service';
import { CategoriaService } from './shared/service/categoria.service';
import { RetoCursoComponent } from './component/reto-curso/reto-curso.component';
import { JuegoCursoComponent } from './component/juego-curso/juego-curso.component';
import { PrincipalJuegoComponent } from './component/principal-juego/principal-juego.component';
import { PrincipalRetoComponent } from './component/principal-reto/principal-reto.component';
import { RetoService } from '../../shared/service/reto.service';
import { CrearJuegoComponent } from './component/crear-juego/crear-juego.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearCursoComponent } from './component/crear-curso/crear-curso.component';
import { CrearRetoComponent } from './component/crear-reto/crear-reto.component';
import { AgregarAsignaturaComponent } from './component/agregar-asignatura/agregar-asignatura.component';
import { PreguntaService } from './shared/service/pregunta.service';
import { JuegoService } from './shared/service/juego.services';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListadoCursosComponent,
    ListadoCategoriasComponent,
    RetoCursoComponent,
    JuegoCursoComponent,
    PrincipalJuegoComponent,
    PrincipalRetoComponent,
    CrearJuegoComponent,
    CrearCursoComponent,
    CrearRetoComponent,
    AgregarAsignaturaComponent,
    
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    Ng2Webstorage.forRoot()
  ],
  providers: [CursoService, CategoriaService, RetoService,PreguntaService,JuegoService]
})
export class CursosModule { }
