import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RestablecerContrasena } from '../../shared/model/restablecer-contrasena.model';
import { AutorizacionService } from '../../shared/service/autorizacion.service';

@Component({
  selector: 'app-olvido-password',
  templateUrl: './olvido-password.component.html',
  styleUrls: ['./olvido-password.component.css']
})
export class OlvidoPasswordComponent implements OnInit {
  form: UntypedFormGroup;


  constructor(public modal: MatDialogRef<OlvidoPasswordComponent>,
    private formBuilder: UntypedFormBuilder, 
    protected autorizacionService: AutorizacionService 
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
      this. restablecerContrasena();
      
    } else {
      this.form.markAllAsTouched();
      this.showModalIncorrecto();
    }
  }
  armarObjetoRestablecer(): RestablecerContrasena{
    return {
      correo: this.form.controls.email.value,
      identificacion: this.form.controls.identificacion.value,
      
       

      };
  }
  

  restablecerContrasena(){
    this.autorizacionService.restablecerContrasena(this.armarObjetoRestablecer())
    .subscribe(respuesta =>{
      if(respuesta==true){
        window.location.reload();
        this.modal.close();
        this.showModalCorrecto();
        console.log('Se guarda curso', respuesta)
      }else{
        this.form.reset();
       this.showModalIncorrecto() 
      }
     
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
