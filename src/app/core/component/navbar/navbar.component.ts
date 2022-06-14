import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private autorizacionService: AutorizacionService
    ) { }

  ngOnInit(): void {
  }

  logout(){
    this.autorizacionService.limpiarLocalStorage();
    this.router.navigate(['/login']);
  }

  crearDocente(){
    this.autorizacionService.limpiarLocalStorage();
    this.router.navigate(['/login']);
  }

  crearEstudiante(){
    this.autorizacionService.limpiarLocalStorage();
    this.router.navigate(['/login']);
  }

}
