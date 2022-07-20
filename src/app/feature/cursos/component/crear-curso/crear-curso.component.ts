import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EventosService } from 'src/app/core/service/eventos.service';
import Swal from 'sweetalert2';
import { Curso } from '../../shared/model/curso.model';
import { CursoService } from '../../shared/service/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  form: UntypedFormGroup;


  constructor(public modal: MatDialogRef<CrearCursoComponent>,
    private eventosService: EventosService,
    private formBuilder: UntypedFormBuilder, private cursoService:CursoService
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
      this.guardarCurso();
      
      this.showModalCorrecto();
      
    } else {
      
      this.form.markAllAsTouched();
      this.showModalIncorrecto();
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
  

  guardarCurso(){
    this.cursoService.guardarCurso(this.armarObjetoCurso())
    .subscribe(curso =>{
      console.log('Se guarda contenido', curso)
    });
   
  }
  showModalCorrecto(){
    Swal.fire({
      icon: 'success',
      title: 'El curso fue creado con exito',
    })
  }
  showModalIncorrecto(){
    Swal.fire({
      icon: 'error',
      title: 'Validar datos invalidos',
    })
  }

 

}