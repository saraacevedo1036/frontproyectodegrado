import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosBlogComponent } from './registros-blog/registros-blog.component';
import { PrincipalBlogComponent } from './principal-blog/principal-blog.component';



@NgModule({
  declarations: [
    RegistrosBlogComponent,
    PrincipalBlogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
