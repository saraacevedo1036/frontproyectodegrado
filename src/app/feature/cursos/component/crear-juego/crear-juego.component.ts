import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { CreacionReto } from '../../shared/model/creacion-reto.model';
import { Pregunta } from '../../shared/model/pregunta.model';

@Component({
  selector: 'app-crear-juego',
  templateUrl: './crear-juego.component.html',
  styleUrls: ['./crear-juego.component.css']
})
export class CrearJuegoComponent implements OnInit {
  TIPO_JUEGO:string = "J";

  form = this.formBuilder.group({
    preguntas: this.formBuilder.array([])
  })

  formularioJuego = this.formBuilder.group({
    titulo:[''],
    descripcion:[''],
    comentario:['']
  }); 

  constructor( private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
  }
 
  inicializarFormularioLogin(){
    this.formularioJuego = this.formBuilder.group({
      titulo:['', Validators.required],
      descripcion:['', Validators.required],
      comentario:['', Validators.required]
    });
  }
  save() {
    
    if (this.formularioJuego.valid  ) {
      const value = this.formularioJuego.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  guardar(){
    const value = this.formularioJuego.value;
      console.log('RETO: ',value);
    const valuePre = this.form.value.preguntas;
      console.log('Preguntas: ',valuePre)

    this.agregarJuego();
    console.log('CREACION RETO',this.armarObjetoAGuardar())
  }
  
  agregarJuego(){

  }

  armarObjetoAGuardar(): CreacionReto{
    const listaPreguntas:Pregunta[] = [];
    this.form.value.preguntas.forEach((pregunta:any) => {
      listaPreguntas.push(this.armarPregunta(pregunta));
    });
    return {
      reto:{
        idCurso: 1,
        tipo:this.TIPO_JUEGO,
        titulo: this.formularioJuego.controls.titulo.value,
        descripcion: this.formularioJuego.controls.descripcion.value,
        comentario:  this.formularioJuego.controls.comentario.value,
        estado: true},
      listaPreguntas: listaPreguntas
    };
  }

  armarPregunta(preguntaForm: any): Pregunta{
    return {    
      texto: preguntaForm.pregunta,
      imagen: preguntaForm.imagen,
      respuesta: preguntaForm.respuesta,
      opcion1: preguntaForm.opcion1,
      opcion2: preguntaForm.opcion2,
      opcion3: preguntaForm.opcion3,
      opcion4: preguntaForm.opcion4,
      estado: true}
  }



  get preguntas(){
    return this.form.controls["preguntas"] as UntypedFormArray;
  }

  agregarPregunta(){
    const preguntaForm = this.formBuilder.group({
      pregunta: ['', Validators. required],
      imagen: ['', Validators. required],
      opcion1: ['', Validators. required],
      opcion2: ['', Validators. required],
      opcion3: ['', Validators. required],
      opcion4: ['', Validators. required],
      respuesta: ['',Validators.required]  
     });

      this.preguntas.push(preguntaForm);


  }

  borrarPregunta(preguntaIndex:number){
    this.preguntas.removeAt(preguntaIndex);

  }
 
  
  
}
