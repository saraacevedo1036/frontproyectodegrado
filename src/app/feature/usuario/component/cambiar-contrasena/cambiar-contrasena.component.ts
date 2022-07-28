import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Location } from '@angular/common'


@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent implements OnInit {
  form: UntypedFormGroup;


  constructor(public modal: MatDialogRef<CambiarContrasenaComponent>,
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
      this.showModal('error','Error validar clave ingresada');
    }
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
          this.showModal('success','La contraseña fue Cambiada con exito');
          this.autorizacionService.limpiarLocalStorage();
          this.router.navigate(['/login']);
        }
        else {
          this.showModal('error','Las contraseñas no son iguales');

        }
      });
  }
  showModal(icon:SweetAlertIcon,title:string) {
    Swal.fire({
      icon: icon,
      title: title,
    })
  }
}
