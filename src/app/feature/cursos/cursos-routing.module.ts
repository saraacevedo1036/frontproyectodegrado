import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { ListadoContenidoComponent } from '../contenido-curso/component/listado-contenido/listado-contenido.component';
import { InicioComponent } from '../funciones-curso/component/inicio/inicio.component';
import { CrearCategoriaComponent } from './component/crear-categoria/crear-categoria.component';
import { PrincipalJuegoComponent } from './component/principal-juego/principal-juego.component';
import { PrincipalRetoComponent } from './component/principal-reto/principal-reto.component';

const routes: Routes = [  
  {path:'listado-cursos/curso/:idCursos', component: InicioComponent, canActivate: [SegurityGuard]},
  {path:'crear-categoria', component: CrearCategoriaComponent, canActivate: [SegurityGuard]},
  {path:'listado-contenido/curso/:idCurso/categoria/:idCategoria', component: ListadoContenidoComponent, canActivate: [SegurityGuard]},
  {path:'principal-retos', component: PrincipalRetoComponent, canActivate: [SegurityGuard]},
  {path:'principal-juegos', component: PrincipalJuegoComponent, canActivate: [SegurityGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
