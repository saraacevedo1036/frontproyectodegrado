import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Location } from '@angular/common'
import { CambioContrasena } from 'src/app/shared/model/cambio-contrasena.model';


@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent implements OnInit {
  form: UntypedFormGroup;


  constructor(public modal: MatDialogRef<CambiarContrasenaComponent>,
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

  cambiarContrasena(){
    this.autorizacionService.cambioContrasena(this.armarObjetoCambioContrasena())
    .subscribe(resp =>{
      if(resp){
        this.showModal('success','Se cambio la contraseña con éxito')
        this.cerrarModal();
        this.autorizacionService.limpiarLocalStorage();
        this.router.navigate(['/login']);
      }
      else{
        this.showModal('error','No fue posible cambiar la contraseña')
      }
    }, error =>{
      this.showModal('error','No fue posible cambiar la contraseña')
    })
  }
 
  armarObjetoCambioContrasena():CambioContrasena{
    return {
      correo: this.autorizacionService.obtenerCorreo(),
      contrasena: this.form.controls.clave.value
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
          this.cambiarContrasena()
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
