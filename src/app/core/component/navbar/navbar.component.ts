import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { CambiarContrasenaComponent } from 'src/app/feature/usuario/component/cambiar-contrasena/cambiar-contrasena.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private autorizacionService: AutorizacionService,public modalCur: MatDialog
    ) { }

  ngOnInit(): void {
  }
  login(){
    this.autorizacionService.limpiarLocalStorage();
    this.router.navigate(['/login']);
  }
  reto(){
    this.autorizacionService.limpiarLocalStorage();
    this.router.navigate(['/reto']);
  }
  logout(){
    this.autorizacionService.limpiarLocalStorage();
    this.router.navigate(['/login']);
  }
  blog(){
    this.router.navigate(['/blog']);
  }
  juego(){
    this.router.navigate(['/juego']);
  }
  inicial(){
    this.router.navigate(['/listado-cursos']);
  }

  crearDocente(){
    this.router.navigate(['/crearDocente']);
  }

  crearEstudiante(){
    
    this.router.navigate(['/crearEstudiante']);
  }
  esDocente():boolean{
    if(this.autorizacionService.noEstaAutenticado() || this.autorizacionService.esRolDocente()){
      return  true;

    }else{
      return false;

    }
     
  }
 
  puedeVisualizar():boolean{
    if(this.autorizacionService.estaAutenticado()){
      return  false;

    }else{
      return true;

    }
    
  }
  
  modalCambiarContra(){
    this.modalCur.open(CambiarContrasenaComponent,{
      width: '450px'});
  }
 

}
