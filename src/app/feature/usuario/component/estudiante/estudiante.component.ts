import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utils/my-validations';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {form: UntypedFormGroup;
  
  constructor(private formBuilder: UntypedFormBuilder) {
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
      if (this.form.valid) {
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
    get password2FieldInvalid(){
      return this.passwordField!!.touched && this.form.errors;

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
    get password2Field(){
      return this.form.get('password2');

    }
    get identificacionField(){
      return this.form.get('identificacion');

    }
    
   
  }
  


