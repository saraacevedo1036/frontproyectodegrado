import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListadoCursosComponent } from './component/listado-cursos/listado-cursos.component';
import { DetalleCursoComponent } from './component/detalle-curso/detalle-curso.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { CategoriaCursoComponent } from './component/categoria-curso/categoria-curso.component';
import { ListadoCategoriasComponent } from './component/listado-categorias/listado-categorias.component';
import { CursoService } from './shared/service/curso.service';
import { CategoriaService } from './shared/service/categoria.service';
import { RetoCursoComponent } from './component/reto-curso/reto-curso.component';
import { JuegoCursoComponent } from './component/juego-curso/juego-curso.component';
import { PrincipalJuegoComponent } from './component/principal-juego/principal-juego.component';
import { PrincipalRetoComponent } from './component/principal-reto/principal-reto.component';
import { RetoService } from './shared/service/reto.service';
import { CrearCategoriaComponent } from './component/crear-categoria/crear-categoria.component';
import { CrearJuegoComponent } from './component/crear-juego/crear-juego.component';


@NgModule({
  declarations: [
    ListadoCursosComponent,
    DetalleCursoComponent,
    CategoriaCursoComponent,
    ListadoCategoriasComponent,
    RetoCursoComponent,
    JuegoCursoComponent,
    PrincipalJuegoComponent,
    PrincipalRetoComponent,
    CrearCategoriaComponent,
    CrearJuegoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    HttpClientModule,
    Ng2Webstorage.forRoot()
  ],
  providers: [CursoService, CategoriaService, RetoService]
})
export class CursosModule { }
