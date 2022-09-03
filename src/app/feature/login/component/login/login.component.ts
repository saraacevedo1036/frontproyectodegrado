import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Autenticacion } from '../../shared/model/autenticacion.model';
import { AutorizacionService } from '../../shared/service/autorizacion.service';
import { OlvidoPasswordComponent } from '../olvido-password/olvido-password.component';

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
    private router: Router, public modalCur: MatDialog) { 
      this.inicializarFormularioLogin();
    }

  ngOnInit(): void {
  }

  inicializarFormularioLogin(){
    this.formularioLogin = this.formBuilder.group({
      usuario:['', Validators.email],
      contrasenia:['', Validators.required]
    });
  }

  onSubmit(){
    this.iniciarSesion();
  }

  iniciarSesion(){
    this.autorizacionService.login(this.generarComandoAutenticacion()).subscribe((data)=>{
      if(data){
        this.showModal('success','Bienvenido')
        this.router.navigateByUrl('listado-cursos');
        
        
      }else{
        
        console.log('No tiene acceso a la aplicación. mostrar mensaje')
      }
    },error=>{
      this.formularioLogin.reset();
      this.showModal('error','Usuario o contraseña invalidos')
      

    });
  }

  generarComandoAutenticacion():Autenticacion{
    return {
      username: this.formularioLogin.controls.usuario.value,
      password: this.formularioLogin.controls.contrasenia.value
    }
  }
  
  showModal(icon:SweetAlertIcon,title:string) {
    Swal.fire({
      icon: icon,
      title: title,
    })
  }
  
  modalOlvideContrasena(){ 
    this.modalCur.open(OlvidoPasswordComponent,{
      width: '450px'});
  }
}
