import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-reto',
  templateUrl: './crear-reto.component.html',
  styleUrls: ['./crear-reto.component.css']
})
export class CrearRetoComponent implements OnInit {

  form = this.formBuilder.group({
    preguntas: this.formBuilder.array([])
  })

  formularioReto = this.formBuilder.group({
    titulo:[''],
    descripcion:[''],
    comentario:['']
  }); 

  constructor( private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
  }
 
  inicializarFormularioLogin(){
    this.formularioReto = this.formBuilder.group({
      titulo:['', Validators.required],
      descripcion:['', Validators.required],
      comentario:['', Validators.required]
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
    const valuePre = this.form.value;
      console.log('Preguntas: ',valuePre)

    this.agregarReto();
  }
  
  agregarReto(){

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
      respuesta: ['opcion 1',Validators.required]  
     });

      this.preguntas.push(preguntaForm);


  }

  borrarPregunta(preguntaIndex:number){
    this.preguntas.removeAt(preguntaIndex);

  }
 
  
  
}
