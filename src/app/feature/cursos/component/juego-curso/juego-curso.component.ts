import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pregunta } from '../../shared/model/pregunta.model';
import { PreguntaService } from '../../shared/service/pregunta.service';

@Component({
  selector: 'app-juego-curso',
  templateUrl: './juego-curso.component.html',
  styleUrls: ['./juego-curso.component.css']
})
export class JuegoCursoComponent implements OnInit {
  idJuego:number;
  listaPreguntas:Pregunta[]=[];

  constructor(private preguntaService:PreguntaService, private activeRoute:ActivatedRoute ) { }

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


}
