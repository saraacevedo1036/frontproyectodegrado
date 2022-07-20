import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { PrincipalBlogComponent } from '../blog/principal-blog/principal-blog.component';
import { RegistrosBlogComponent } from '../blog/registros-blog/registros-blog.component';
import { ListadoContenidoComponent } from '../contenido-curso/component/listado-contenido/listado-contenido.component';
import { InicioComponent } from '../funciones-curso/component/inicio/inicio.component';
import { CrearCategoriaComponent } from './component/crear-categoria/crear-categoria.component';
import { CrearJuegoComponent } from './component/crear-juego/crear-juego.component';
import { CrearRetoComponent } from './component/crear-reto/crear-reto.component';
import { JuegoCursoComponent } from './component/juego-curso/juego-curso.component';
import { PrincipalJuegoComponent } from './component/principal-juego/principal-juego.component';
import { PrincipalRetoComponent } from './component/principal-reto/principal-reto.component';
import { RetoCursoComponent } from './component/reto-curso/reto-curso.component';

const routes: Routes = [  
  {path:'reto/:idJuego', component: RetoCursoComponent, canActivate: [SegurityGuard]},
  {path:'juego/:idJuego', component: JuegoCursoComponent, canActivate: [SegurityGuard]},
  {path:'crear-reto', component: CrearRetoComponent, canActivate: [SegurityGuard]},
  {path:'crear-juego', component: CrearJuegoComponent, canActivate: [SegurityGuard]},
  {path:'crear-contenido/:idCurso', component:PrincipalBlogComponent , canActivate: [SegurityGuard]},
  {path:'listado-cursos/curso/:idCursos', component: InicioComponent, canActivate: [SegurityGuard]},
  {path:'crear-categoria', component: CrearCategoriaComponent, canActivate: [SegurityGuard]},
  {path:'listado-contenido/curso/:idCurso/categoria/:idCategoria', component: RegistrosBlogComponent, canActivate: [SegurityGuard]},
  {path:'principal-retos', component: PrincipalRetoComponent, canActivate: [SegurityGuard]},
  {path:'principal-juegos', component: PrincipalJuegoComponent, canActivate: [SegurityGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
