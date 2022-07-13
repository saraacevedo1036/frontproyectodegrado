import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { PrincipalBlogComponent } from '../blog/principal-blog/principal-blog.component';
import { ListadoContenidoComponent } from '../contenido-curso/component/listado-contenido/listado-contenido.component';
import { ListadoCategoriasComponent } from './component/listado-categorias/listado-categorias.component';
import { PrincipalJuegoComponent } from './component/principal-juego/principal-juego.component';
import { PrincipalRetoComponent } from './component/principal-reto/principal-reto.component';

const routes: Routes = [  
  
  {path:'listado-contenido', component: ListadoContenidoComponent, canActivate: [SegurityGuard]},
  {path:'principal-retos', component: PrincipalRetoComponent, canActivate: [SegurityGuard]},
  {path:'principal-juegos', component: PrincipalJuegoComponent, canActivate: [SegurityGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
