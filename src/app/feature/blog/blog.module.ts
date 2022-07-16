import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosBlogComponent } from './registros-blog/registros-blog.component';
import { PrincipalBlogComponent } from './principal-blog/principal-blog.component';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    RegistrosBlogComponent,
    PrincipalBlogComponent
    
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class BlogModule { }
