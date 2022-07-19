import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionesCursoRoutingModule } from './funciones-curso-routing.module';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { MaterialModule } from '../material/material.module';
import { InicioComponent } from './component/inicio/inicio.component';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    FuncionesCursoRoutingModule,
    YouTubePlayerModule,
    MaterialModule
  ]
})
export class FuncionesCursoModule { }
