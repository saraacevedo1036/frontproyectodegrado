import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalBlogComponent } from '../blog/principal-blog/principal-blog.component';

const routes: Routes = [{path:'post-blog', component: PrincipalBlogComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenidoCursoRoutingModule { }
