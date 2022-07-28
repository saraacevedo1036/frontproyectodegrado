import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { CreacionCurso } from '../../shared/model/creacion-curso.model';
import { CursoService } from '../../shared/service/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  form: UntypedFormGroup;


  constructor(public modal: MatDialogRef<CrearCursoComponent>,
    private formBuilder: UntypedFormBuilder, private cursoService:CursoService,
    protected autorizacionService: AutorizacionService ,private router: Router,
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
      window.location.reload();
      this.guardarCurso();
    } else {
      
      this.form.markAllAsTouched();
      this.showModal('error','Los datos ingresados no son validos');
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
  armarObjetoCurso(): CreacionCurso{
    return {
      correoDocente: this.autorizacionService.obtenerCorreo(),
      nombre: this.form.controls.nombre.value,
      grado:this.form.controls.grado.value,
      };
  }
  

  guardarCurso(){
    this.cursoService.guardarCurso(this.armarObjetoCurso())
    .subscribe(curso =>{
      this.modal.close();
      this.showModal('success','El curso fue creado con exito');
      
    },error=>{
      
      this.showModal('error','Los datos ingresados no son validos')
      
    });
   
  }
  showModal(icon:SweetAlertIcon,title:string) {
    Swal.fire({
      icon: icon,
      title: title,
    })
  }
}