import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EventosService } from 'src/app/core/service/eventos.service';
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
      claveAsignatura: ['', [Validators.required]]
      
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
  
  
  
 
  
 

}