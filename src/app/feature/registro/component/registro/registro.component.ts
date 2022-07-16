import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Docente } from '../../shared/model/docente.model';
import { Estudiante } from '../../shared/model/estudiante.model';
import { DocenteService } from '../../shared/service/docente.service';
import { EstudianteService } from '../../shared/service/estudiante.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioResgistro = this.formBuilder.group({
    nombre:[''],
    apellido:[''],
    identificacion:[''],
    correo:[''], 
    constrasena:[''],
    estado:['']

  }); 
 
   //Validar que desactivar o activar del tsConfig para que no salga error 
 
  //docente: Docente;
  //estudiante: Estudiante;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private docenteService: DocenteService,
    private estudianteService:EstudianteService) {
      this.inicializarFormularioRegistro();
     }

  ngOnInit(): void {
  }

  inicializarFormularioRegistro(){
    this.formularioResgistro = this.formBuilder.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      identificacion:['', Validators.required],
      correo:['', Validators.required], 
      constrasena:['', Validators.required],
      estado:['', Validators.required]
    });
  }

  crearDocente(){
    this.docenteService.crear(this.generarComandoDocente()).subscribe((data)=>{
      console.log('Respuesta crear docente', data)
      // si está logeado mandar a home sino a login
    });
  }

  crearEstudiante(){
    this.estudianteService.crear(this.generarComandoEstudiante()).subscribe((data)=>{
      console.log('Respuesta crear estudiante', data)
        // si está logeado mandar a home sino a login
        // JSONP
    });
  }

  generarComandoDocente(): Docente{
    return {
      nombre: this.formularioResgistro.controls.nombre.value,
      apellido: this.formularioResgistro.controls.apellido.value,
      identificacion: this.formularioResgistro.controls.identificacion.value,
      correo: this.formularioResgistro.controls.correo.value,
      constrasena: this.formularioResgistro.controls.v.value,
      estado: this.formularioResgistro.controls.estado.value
    }
  }

  generarComandoEstudiante(): Estudiante{
    return {
      nombre: this.formularioResgistro.controls.nombre.value,
      apellido: this.formularioResgistro.controls.apellido.value,
      identificacion: this.formularioResgistro.controls.identificacion.value,
      correo: this.formularioResgistro.controls.correo.value,
      constrasena: this.formularioResgistro.controls.v.value,
      estado: this.formularioResgistro.controls.estado.value
    }
  }

}
