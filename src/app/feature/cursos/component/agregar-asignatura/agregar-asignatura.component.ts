import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { AsignarCurso } from '../../shared/model/estudiante-curso.model';
import { CursoEstudianteService } from '../../shared/service/curso-estudiante.service';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';

@Component({
  selector: 'app-agregar-asignatura',
  templateUrl: './agregar-asignatura.component.html',
  styleUrls: ['./agregar-asignatura.component.css']
})
export class AgregarAsignaturaComponent implements OnInit {
  form: UntypedFormGroup;


  constructor(public modal: MatDialogRef<CrearCursoComponent>,
    private eventosService: EventosService,
    private formBuilder: UntypedFormBuilder, 
    protected autorizacionService: AutorizacionService ,private router: Router,private cursoEstudianteService: CursoEstudianteService,
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
      claveAsignatura: ['', [Validators.required]]
      
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid  ) {
      this.guardarCurso();
    } else {
      this.form.markAllAsTouched();
      this.showModal('error','La clave ingresada no es correcta, valida con tu docente');
    }
  }
  armarObjetoCurso(): AsignarCurso{
    return {
      correoEstudiante: this.autorizacionService.obtenerCorreo(),
      codigoCurso: this.form.controls.claveAsignatura.value,
      };
  }
  
  guardarCurso(){
    this.cursoEstudianteService.asignarCurso(this.armarObjetoCurso())
    .subscribe(curso =>{
      
      this.modal.close();
      this.showModal('success','El curso fue creado con exito');
      window.location.reload();
      console.log('Se guarda curso', curso)
    }
    ,error=>{
      this.form.reset();
      this.showModal('error','La clave ingresada no es correcta, valida con tu docente')
    }
    );
   
  }
  
  showModal(icon:SweetAlertIcon,title:string) {
    Swal.fire({
      icon: icon,
      title: title,
    })
  }
}