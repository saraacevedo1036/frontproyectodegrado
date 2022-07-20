import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { CreacionReto } from '../../shared/model/creacion-reto.model';
import { Pregunta } from '../../shared/model/pregunta.model';
import { JuegoService } from '../../shared/service/juego.services';

@Component({
  selector: 'app-crear-reto',
  templateUrl: './crear-reto.component.html',
  styleUrls: ['./crear-reto.component.css']
})
export class CrearRetoComponent implements OnInit {
  TIPO_RETO:string = "R";

  form = this.formBuilder.group({
    preguntas: this.formBuilder.array([])
  })

  formularioReto = this.formBuilder.group({
    titulo:[''],
    descripcion:[''],
    comentario:['']
  }); 

  constructor( private formBuilder: UntypedFormBuilder, private juegoService:JuegoService) { }

  ngOnInit(): void {
  }
 
  inicializarFormularioLogin(){
    this.formularioReto = this.formBuilder.group({
      titulo:['', Validators.required],
      descripcion:['', Validators.required],
      comentario:['']
    });
  }
  save() {
    
    if (this.formularioReto.valid  ) {
      const value = this.formularioReto.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  guardar(){
    
    const value = this.formularioReto.value;
      console.log('RETO: ',value);
    const valuePre = this.form.value.preguntas;
      console.log('Preguntas: ',valuePre)

    this.agregarReto();
    console.log('CREACION RETO',this.armarObjetoAGuardar())
  }
  
  agregarReto(){
    this.juegoService.guardarJuego(this.armarObjetoAGuardar())
      .subscribe(contenido =>{
        console.log('Se guarda contenido', contenido)
      });


  }

  armarObjetoAGuardar(): CreacionReto{
    const listaPreguntas:Pregunta[] = [];
    this.form.value.preguntas.forEach((pregunta:any) => {
      listaPreguntas.push(this.armarPregunta(pregunta));
    });
    return {
      reto:{
        idCurso: 1,
        tipo:this.TIPO_RETO,
        titulo: this.formularioReto.controls.titulo.value,
        descripcion: this.formularioReto.controls.descripcion.value,
        comentario:  this.formularioReto.controls.comentario.value,
        estado: true},
      listaPreguntas: listaPreguntas
    };
  }

  armarPregunta(preguntaForm: any): Pregunta{
    return {    
      texto: preguntaForm.pregunta,
      imagen: preguntaForm.imagen,
      respuesta: preguntaForm.opcion1,
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
      imagen: [''],
      opcion1: ['', Validators. required],
      opcion2: ['', Validators. required],
      opcion3: ['', Validators. required],
      opcion4: ['', Validators. required],
      
     });

      this.preguntas.push(preguntaForm);


  }

  borrarPregunta(preguntaIndex:number){
    this.preguntas.removeAt(preguntaIndex);

  }
  
 
  
  
}
