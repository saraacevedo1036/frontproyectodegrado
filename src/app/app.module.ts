import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './feature/material/material.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './feature/home/component/home/home.component';
import { LoginModule } from './feature/login/login.module';
import { CursosModule } from './feature/cursos/cursos.module';
import { ContenidoCursoModule } from './feature/contenido-curso/contenido-curso.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    LoginModule,
    CursosModule,
    ContenidoCursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
