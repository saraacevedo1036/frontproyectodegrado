import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Curso } from '../../shared/model/curso.model';
import { AsignarCurso } from '../../shared/model/estudiante-curso.model';
import { CursoEstudianteService } from '../../shared/service/curso-estudiante.service';
import { CursoService } from '../../shared/service/curso.service';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {
  form: UntypedFormGroup;
  curso:Curso;

  constructor(public modal: MatDialogRef<CrearCursoComponent>,
    private formBuilder: UntypedFormBuilder, 
    protected autorizacionService: AutorizacionService ,
    private cursoEstudianteService: CursoEstudianteService,
    private cursoService:CursoService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
      this.buildForm();
    }

  ngOnInit(): void {
    this.obtenerCursoPorId(this.data.idCurso); 
  }

  cerrarModal(): void{
    this.modal.close();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      correoEstudiante: ['', [Validators.required,Validators.email]]
      
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.guardarCurso();
    } else {
      this.form.markAllAsTouched();
      this.showModal('error','El correo ingresado no es correcto');
    }
  }

  armarObjetoCurso(): AsignarCurso{
    return {
      correoEstudiante: this.form.controls.correoEstudiante.value,
      codigoCurso:this.curso.codigo
      };
  }

  guardarCurso(){
    this.cursoEstudianteService.asignarCurso(this.armarObjetoCurso())
    .subscribe(curso =>{
      window.location.reload();
      this.modal.close();
      this.showModal('success','El estudiante fue asignado al curso con exito');
    }
    ,error=>{
      this.form.reset();
      this.showModal('error','El correo ingresado no es correcto')  
    });
  }

  
  obtenerCursoPorId(idCurso:number){
    this.cursoService.obtenerCursoPorId(idCurso).subscribe(curso =>{
      this.curso = curso;
    });
  }
  
  showModal(icon:SweetAlertIcon,title:string) {
    Swal.fire({
      icon: icon,
      title: title,
    })
  }
}