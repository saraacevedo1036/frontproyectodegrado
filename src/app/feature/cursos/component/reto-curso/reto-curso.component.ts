import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pregunta } from '../../shared/model/pregunta.model';
import { PreguntaService } from '../../shared/service/pregunta.service';
@Component({
  selector: 'app-reto-curso',
  templateUrl: './reto-curso.component.html',
  styleUrls: ['./reto-curso.component.css']
})
export class RetoCursoComponent implements OnInit {
  idJuego:number;
  listaPreguntas:Pregunta[]=[];
  form = this.formBuilder.group({
    respuestas: this.formBuilder.array([])
  })

  constructor(private preguntaService:PreguntaService, private activeRoute:ActivatedRoute,
    private formBuilder: UntypedFormBuilder ) { }
  

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idJuego = params.idJuego;
      this.obtenerListaPreguntas();
    });
  }
  obtenerListaPreguntas(){
    this.preguntaService.listarPorIdReto(this.idJuego).subscribe(preguntas=>{
      if(preguntas.length>0){
        this.listaPreguntas=preguntas;
        console.log('listapreguntas',this.listaPreguntas)
      }else{
        console.log('No tiene Contenidos, mostrar este mensaje')
        this.listaPreguntas = [];

      }
      
    })
  }
  get respuestas(){
    return this.form.controls["respuestas"] as UntypedFormArray;
  }
  agregarPregunta(){
    const form = this.formBuilder.group({
      respuesta: ['', Validators. required],
      
      
     });

      this.respuestas.push(form);


  }


}

