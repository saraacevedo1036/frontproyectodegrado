import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Autenticacion } from '../../shared/model/autenticacion.model';
import { AutorizacionService } from '../../shared/service/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin = this.formBuilder.group({
    usuario:[''],
    contrasenia:['']
  }); 
  autenticacion:Autenticacion = {};

  constructor(private formBuilder: FormBuilder,
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
        this.router.navigateByUrl('listado-cursos');
      }else{
        console.log('No tiene acceso a la aplicación. mostrar mensaje')
      }
    });
  }

  generarComandoAutenticacion():Autenticacion{
    return {
      username: this.formularioLogin.controls.usuario.value,
      password: this.formularioLogin.controls.contrasenia.value
    }
  }
}
