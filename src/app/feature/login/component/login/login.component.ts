import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Autenticacion } from '../../shared/model/autenticacion.model';
import { AutorizacionService } from '../../shared/service/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') namekey!: ElementRef;

  formularioLogin = this.formBuilder.group({
    usuario:[''],
    contrasenia:['']
  }); 
  autenticacion:Autenticacion = {};

  constructor(private formBuilder: UntypedFormBuilder,
    private autorizacionService: AutorizacionService,
    private router: Router) { 
      this.inicializarFormularioLogin();
    }

  ngOnInit(): void {
  }

  inicializarFormularioLogin(){
    this.formularioLogin = this.formBuilder.group({
      usuario:['', Validators.required],
      contrasenia:['', Validators.required]
    });
  }

  onSubmit(){
    this.iniciarSesion();
  }

  iniciarSesion(){
    this.autorizacionService.login(this.generarComandoAutenticacion()).subscribe((data)=>{
      if(data){
        this.showModalCorrecto()
        this.router.navigateByUrl('listado-cursos');
        
        
      }else{
        
        console.log('No tiene acceso a la aplicación. mostrar mensaje')
      }
    },error=>{
      this.formularioLogin.reset();
      this.showModalIncorrecto()
      

    });
  }

  generarComandoAutenticacion():Autenticacion{
    return {
      username: this.formularioLogin.controls.usuario.value,
      password: this.formularioLogin.controls.contrasenia.value
    }
  }
  showModalCorrecto(){
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido',
    })
  }
  showModalIncorrecto(){
    Swal.fire({
      icon: 'error',
      title: 'Usuario o contraseña invalidos',
    })
  }
}
