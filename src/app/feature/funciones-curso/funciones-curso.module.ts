import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionesCursoRoutingModule } from './funciones-curso-routing.module';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FuncionesCursoRoutingModule,
    YouTubePlayerModule
  ]
})
export class FuncionesCursoModule { }
