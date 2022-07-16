import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventosService } from 'src/app/core/service/eventos.service';

@Component({
  selector: 'app-crear-juego',
  templateUrl: './crear-juego.component.html',
  styleUrls: ['./crear-juego.component.css']
})
export class CrearJuegoComponent implements OnInit {

  form = this.formBuilder.group({
    preguntas: this.formBuilder.array([])
  })
  formularioJuego = this.formBuilder.group({
    titulo:[''],
    descripcion:[''],
    comentario:['']
  }); 

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
  }
 
  inicializarFormularioLogin(){
    this.formularioJuego = this.formBuilder.group({
      titulo:['', Validators.required],
      descripcion:['', Validators.required],
      comentario:['', Validators.required]
    });
  }
  onSubmit(){
    this.agregarJuego();
  }
  agregarJuego(){

  }
  get preguntas(){
    return this.form.controls["preguntas"] as FormArray;
  }
  agregarPregunta(){
    const preguntaForm = this.formBuilder.group({
      pregunta: ['', Validators. required],
      imagen: ['', Validators. required],
      opcion1: ['', Validators. required],
      opcion2: ['', Validators. required],
      opcion3: ['', Validators. required],
      opcion4: ['', Validators. required],
      respuesta: ['opcion 1',Validators.required]   });
      this.preguntas.push(preguntaForm);


  }
  borrarPregunta(preguntaIndex:number){
    this.preguntas.removeAt(preguntaIndex);

  }
}
