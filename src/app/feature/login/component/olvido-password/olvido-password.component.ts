import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
import Swal from 'sweetalert2';
import { AutorizacionService } from '../../shared/service/autorizacion.service';

@Component({
  selector: 'app-olvido-password',
  templateUrl: './olvido-password.component.html',
  styleUrls: ['./olvido-password.component.css']
})
export class OlvidoPasswordComponent implements OnInit {
  form: UntypedFormGroup;


  constructor(public modal: MatDialogRef<OlvidoPasswordComponent>,
    private eventosService: EventosService,
    private formBuilder: UntypedFormBuilder, 
    protected autorizacionService: AutorizacionService ,private router: Router
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
      email: ['', [Validators.required,Validators.email]],
      identificacion: ['', [Validators.required]]
      
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid  ) {
      
    } else {
      this.form.markAllAsTouched();
      this.showModalIncorrecto();
    }
  }
 
  showModalCorrecto(){
    Swal.fire({
      icon: 'success',
      title: 'La contraseña fue enviada con exito',
    })
  }
  showModalIncorrecto(){
    Swal.fire({
      icon: 'error',
      title: 'Valida los datos ingresados',
    })
  }
}
