import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { ListadoCategoriasComponent } from './component/listado-categorias/listado-categorias.component';

const routes: Routes = [  {
  path:'listado-categoria', component: ListadoCategoriasComponent,canActivate: [SegurityGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
