import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosBlogComponent } from './registros-blog/registros-blog.component';
import { PrincipalBlogComponent } from './principal-blog/principal-blog.component';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';



@NgModule({
  declarations: [
    RegistrosBlogComponent,
    PrincipalBlogComponent
    
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ]
})
export class BlogModule { }
