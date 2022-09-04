import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteGuard } from 'src/app/core/guard/docente.guard';
import { SegurityGuard } from 'src/app/core/guard/segurity-guard.service';
import { PrincipalBlogComponent } from '../blog/principal-blog/principal-blog.component';

const routes: Routes = [ 
  {path:'actualizar-contenido/:idCurso/categoria/:idCategoria/curso-contenido/:idCursoContenido', component:PrincipalBlogComponent , canActivate: [SegurityGuard,DocenteGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
