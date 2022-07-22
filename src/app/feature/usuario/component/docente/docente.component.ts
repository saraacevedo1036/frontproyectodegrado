import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { UntypedFormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MyValidators } from 'src/app/utils/my-validations';
import Swal from 'sweetalert2';
import { Docente } from '../../model/docente.model';
import { DocenteService } from '../../service/docente.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
  form: UntypedFormGroup;
  
  constructor(private formBuilder: UntypedFormBuilder,
         private docenteService:DocenteService,private location: Location
    ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }
  
    
    private buildForm() {
      this.form = this.formBuilder.group({
        nombre: ['', [Validators.required,Validators.minLength(3)]],
        apellido: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [ Validators.required,Validators.email]],
        identificacion: ['', Validators.required]
        
      }, {Validators: MyValidators.matchPasswords});
    
    }
    
    
    save(event: Event) {
      event.preventDefault();
      if (this.form.valid  ) {
        this.validarcontra()
        const value = this.form.value;
        console.log(value);
      } else {
        this.form.markAllAsTouched();
      }
    }
    get emailFieldValid(){
      return this.emailField!!.touched && this.emailField!!.valid;

    }
    get emailFieldInvalid(){
      return this.emailField!!.touched && this.emailField!!.invalid;

    }
    get nombreFieldValid(){
      return this.nombreField!!.touched && this.nombreField!!.valid;

    }
    get nombreFieldInvalid(){
      return this.nombreField!!.touched && this.nombreField!!.invalid;

    }
    get apellidoFieldValid(){
      return this.apellidoField!!.touched && this.apellidoField!!.valid;

    }
    get apellidoFieldInvalid(){
      return this.apellidoField!!.touched && this.apellidoField!!.invalid;

    }
    get passwordFieldValid(){
      return this.passwordField!!.touched && this.passwordField!!.valid;

    }
    get passwordFieldInvalid(){
      return this.passwordField!!.touched && this.passwordField!!.invalid;

    }
    
    get identificacionFieldValid(){
      return this.identificacionField!!.touched && this.identificacionField!!.valid;

    }
    get identificacionFieldInvalid(){
      return this.identificacionField!!.touched && this.identificacionField!!.invalid;

    }
    get emailField(){
      return this.form.get('email');

    }
    get nombreField(){
      return this.form.get('nombre');

    }
    get apellidoField(){
      return this.form.get('apellido');

    }
    get passwordField(){
      return this.form.get('password');

    }
    get identificacionField(){
      return this.form.get('identificacion');

    }
    armarObjetoContenido(): Docente{
      return {
        nombre: this.form.controls.nombre.value,
        apellido:this.form.controls.apellido.value,
        identificacion:this.form.controls.identificacion.value,
        correo:this.form.controls.email.value,
        contrasena:this.form.controls.password.value,
        estado: true, 

        };
    }
  
    guardarDocente(){
      this.docenteService.guardarDocente(this.armarObjetoContenido())
      .subscribe(contenido =>{
        console.log('Se guarda contenido', contenido)
      });
    }
    validarcontra(){
      Swal
        .fire({
            title: "Validar Contraseña",
            input: "password",
            showCancelButton: true,
            confirmButtonText: "validar",
            cancelButtonText: "Cancelar",
        })
        .then(resultado => {
            if (resultado.value===this.form.controls.password.value) {
              this.guardarDocente();
              this.location.back();
            }
            else{
              this.showModalIncorrecto();

            }
        });
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
        title: 'Las contraseñas no coinciden',
      })
    }
   
  
    
   
  }
  


