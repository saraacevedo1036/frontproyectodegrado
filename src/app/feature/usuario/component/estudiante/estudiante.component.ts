import { Component, OnInit } from '@angular/core';
import {  UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utils/my-validations';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Estudiante } from '../../model/estudiante.model';
import { EstudianteService } from '../../service/estudiante.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  form: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder,
    private estudianteService: EstudianteService, private location: Location) {
    this.buildForm();
  }

  ngOnInit(): void {
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', Validators.required],
      password: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
      identificacion: ['', Validators.required]

    }, { Validators: MyValidators.matchPasswords });

  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.validarcontra();
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  get emailFieldValid() {
    return this.emailField!!.touched && this.emailField!!.valid;

  }
  get emailFieldInvalid() {
    return this.emailField!!.touched && this.emailField!!.invalid;

  }
  get nombreFieldValid() {
    return this.nombreField!!.touched && this.nombreField!!.valid;

  }
  get nombreFieldInvalid() {
    return this.nombreField!!.touched && this.nombreField!!.invalid;

  }
  get apellidoFieldValid() {
    return this.apellidoField!!.touched && this.apellidoField!!.valid;

  }
  get apellidoFieldInvalid() {
    return this.apellidoField!!.touched && this.apellidoField!!.invalid;

  }
  get passwordFieldValid() {
    return this.passwordField!!.touched && this.passwordField!!.valid;

  }
  get passwordFieldInvalid() {
    return this.passwordField!!.touched && this.passwordField!!.invalid;

  }
  get password2FieldInvalid() {
    return this.passwordField!!.touched && this.form.errors;

  }

  get identificacionFieldValid() {
    return this.identificacionField!!.touched && this.identificacionField!!.valid;

  }
  get identificacionFieldInvalid() {
    return this.identificacionField!!.touched && this.identificacionField!!.invalid;

  }


  get emailField() {
    return this.form.get('email');

  }
  get nombreField() {
    return this.form.get('nombre');

  }
  get apellidoField() {
    return this.form.get('apellido');

  }
  get passwordField() {
    return this.form.get('password');

  }
  get password2Field() {
    return this.form.get('password2');

  }
  get identificacionField() {
    return this.form.get('identificacion');

  }
  armarObjetoEstudiante(): Estudiante {
    return {
      nombre: this.form.controls.nombre.value,
      apellido: this.form.controls.apellido.value,
      identificacion: this.form.controls.identificacion.value,
      correo: this.form.controls.email.value,
      contrasena: this.form.controls.password.value,
      estado: true,

    };
  }

  guardarEstudiante() {
    this.estudianteService.guardarEstudiante(this.armarObjetoEstudiante())
      .subscribe(contenido => {
        if(contenido){
        this.showModal('success','El estudiante se creo con exito');
        this.location.back();
        }
        else{
          this.showModal('error','No fue posible crear el estudiante, por favor valida la información ')
        }
        
      },error=>{
        this.form.reset();
        this.showModal('error','No fue posible crear el estudiante, por favor valida la información ')
        
      });
  }
  validarcontra() {
    Swal
      .fire({
        title: "Validar Contraseña",
        input: "password",
        showCancelButton: true,
        confirmButtonText: "validar",
        cancelButtonText: "Cancelar",
      })
      .then(resultado => {
        if (resultado.value === this.form.controls.password.value) {
          this.guardarEstudiante();
          
        }
        else {
          this.showModal('error','Las contraseñas no coinciden');

        }
      });
  }
  showModal(icon:SweetAlertIcon,title:string) {
    Swal.fire({
      icon: icon,
      title: title,
    })
  }
 
}



