import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common'


@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent implements OnInit {
  form: UntypedFormGroup;


  constructor(public modal: MatDialogRef<CambiarContrasenaComponent>,
    private eventosService: EventosService,
    private formBuilder: UntypedFormBuilder, 
    protected autorizacionService: AutorizacionService ,private router: Router, 
    private location: Location
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
      clave: ['', [Validators.required]]
      
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid  ) {
      this.validarcontra();
    } else {
      this.form.markAllAsTouched();
      this.showModalIncorrecto();
    }
  }
 
  showModalCorrecto(){
    Swal.fire({
      icon: 'success',
      title: 'La contraseña fue Cambiada con exito',
      
    })
    this.autorizacionService.limpiarLocalStorage();
    this.router.navigate(['/login']);
  }
  showModalIncorrecto(){
    Swal.fire({
      icon: 'error',
      title: 'La clave ingresada no es correcta, valida con tu docente',
    })
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
        if (resultado.value === this.form.controls.clave.value) {
          
          this.location.back();
          this.showModalCorrecto();
        }
        else {
          this.showModalIncorrecto();

        }
      });
  }
}
