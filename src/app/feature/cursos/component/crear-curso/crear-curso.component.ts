import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EventosService } from 'src/app/core/service/eventos.service';
import { Curso } from '../../shared/model/curso.model';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  form: UntypedFormGroup;


  constructor(public modal: MatDialogRef<CrearCursoComponent>,
    private eventosService: EventosService,
    private formBuilder: UntypedFormBuilder
    ) { 
      this.buildForm();
    }

  ngOnInit(): void {
  }
  cerrarModal(): void{
    this.modal.close();
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required,Validators.minLength(3)]],
      grado: ['', [Validators.required]],
      
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid  ) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  
  get nombreFieldValid(){
    return this.nombreField!!.touched && this.nombreField!!.valid;

  }
  get nombreFieldInvalid(){
    return this.nombreField!!.touched && this.nombreField!!.invalid;

  }
  get gradoFieldValid(){
    return this.gradoField!!.touched && this.gradoField!!.valid;

  }
  get gradoFieldInvalid(){
    return this.gradoField!!.touched && this.gradoField!!.invalid;

  }
 
  get nombreField(){
    return this.form.get('nombre');

  }
  get gradoField(){
    return this.form.get('grado');

  }
  armarObjetoCurso(): Curso{
    return {
      
      nombre: this.form.controls.nombre.value,
      grado:this.form.controls.grado.value,
       

      };
  }

  

  
 
  
 

}