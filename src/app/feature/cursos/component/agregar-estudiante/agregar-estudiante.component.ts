import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal from 'sweetalert2';
import { AsignarCurso } from '../../shared/model/estudiante-curso.model';
import { CursoEstudianteService } from '../../shared/service/curso-estudiante.service';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {
  form: UntypedFormGroup;


  constructor(public modal: MatDialogRef<CrearCursoComponent>,
    private eventosService: EventosService,
    private formBuilder: UntypedFormBuilder, 
    protected autorizacionService: AutorizacionService ,private router: Router,
    private cursoEstudianteService: CursoEstudianteService,
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
      correoEstudiante: ['', [Validators.required,Validators.email]]
      
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid  ) {
      this.guardarCurso();
    } else {
      this.form.markAllAsTouched();
      this.showModalIncorrecto();
    }
  }
  armarObjetoCurso(): AsignarCurso{
    return {
      codigoCurso: this.form.controls.correoEstudiante.value ,
      correoEstudiante: this.form.controls.correoEstudiante.value,
      
       

      };
  }
  

  guardarCurso(){
    this.cursoEstudianteService.asignarCurso(this.armarObjetoCurso())
    .subscribe(curso =>{
      window.location.reload();
      this.modal.close();
      this.showModalCorrecto();
      console.log('Se guarda curso', curso)
    }
    ,error=>{
      this.form.reset();
      this.showModalIncorrecto()
      
    }
    );
   
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
      title: 'El correo ingresado no es correcto',
    })
  }
  
  
  
 
  
 

}