import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal, { SweetAlertIcon } from 'sweetalert2';
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
      this.showModal('error','Valida los datos ingresados');
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
        
        this.showModal('success','La contraseña fue enviada con exito');
        this.modal.close();
        
      }else{
        this.form.reset();
       this.showModal('error','Valida los datos ingresados') 
      }
     
    }
    ,error=>{
      this.form.reset();
      this.showModal('error','Valida los datos ingresados')  
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
