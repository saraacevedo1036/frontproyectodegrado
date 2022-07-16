import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
  formularioUsuario = this.formBuilder.group({
    nombre:[''],
    apellido:[''],
    contraseña:[''],
    validarContraseña:[''],
    email:[''],
    identificacion:['']

  }); 
  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
  }
  inicializarFormularoUsuario(){
    this.formularioUsuario = this.formBuilder.group({
      nombre:['', Validators.required],
    apellido:['', Validators.required],
    contraseña:['', Validators.required],
    validarContraseña:['', Validators.required],
    email:['', Validators.required],
    identificacion:['', Validators.required]
      
    });
  }

}
