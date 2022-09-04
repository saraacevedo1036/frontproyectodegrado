import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteGuard } from 'src/app/core/guard/docente.guard';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { PrincipalBlogComponent } from '../blog/principal-blog/principal-blog.component';
import { RegistrosBlogComponent } from '../blog/registros-blog/registros-blog.component';
import { InicioComponent } from '../funciones-curso/component/inicio/inicio.component';
import { CrearJuegoComponent } from './component/crear-juego/crear-juego.component';
import { CrearRetoComponent } from './component/crear-reto/crear-reto.component';
import { JuegoCursoComponent } from './component/juego-curso/juego-curso.component';
import { ListaRespuestasCorrectasComponent } from './component/lista-respuestas-correctas/lista-respuestas-correctas.component';
import { ListadoCursosComponent } from './component/listado-cursos/listado-cursos.component';
import { PrincipalJuegoComponent } from './component/principal-juego/principal-juego.component';
import { PrincipalRetoComponent } from './component/principal-reto/principal-reto.component';
import { RetoCursoComponent } from './component/reto-curso/reto-curso.component';

const routes: Routes = [ 
  {path:'listaRespuesta/:idJuego', component: ListaRespuestasCorrectasComponent, canActivate: [SegurityGuard]},
  {path:'cursos/:idCursos/reto', component: PrincipalRetoComponent, canActivate: [SegurityGuard]},
  {path:'listado-cursos', component: ListadoCursosComponent, canActivate: [SegurityGuard]}, 
  {path:'reto/:idJuego/curso/:idCurso', component: RetoCursoComponent, canActivate: [SegurityGuard]},
  {path:'juego/:idJuego/curso/:idCurso', component: JuegoCursoComponent, canActivate: [SegurityGuard]},
  {path:'curso/:idCursos/crear-reto', component: CrearRetoComponent, canActivate: [SegurityGuard,DocenteGuard]},
  {path:'curso/:idCursos/crear-juego', component: CrearJuegoComponent, canActivate: [SegurityGuard,DocenteGuard]},
  {path:'crear-contenido/:idCurso', component:PrincipalBlogComponent , canActivate: [SegurityGuard,DocenteGuard]},
  {path:'listado-cursos/curso/:idCursos', component: InicioComponent, canActivate: [SegurityGuard]},
  {path:'listado-contenido/curso/:idCurso/categoria/:idCategoria', component: RegistrosBlogComponent, canActivate: [SegurityGuard]},
  {path:'principal-juegos', component: PrincipalJuegoComponent, canActivate: [SegurityGuard]},
  {path:'actualizar-contenido/:idCurso/categoria/:idCategoria/curso-contenido/idCursoContenido', component:PrincipalBlogComponent , canActivate: [SegurityGuard,DocenteGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
