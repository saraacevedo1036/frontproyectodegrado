import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { Pregunta } from '../../shared/model/pregunta.model';
import { EstudianteJuegoRespuestaService } from '../../shared/service/estudiante-juego-respuesta.service';
import { PreguntaService } from '../../shared/service/pregunta.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-lista-respuestas-correctas',
  templateUrl: './lista-respuestas-correctas.component.html',
  styleUrls: ['./lista-respuestas-correctas.component.css']
})
export class ListaRespuestasCorrectasComponent implements OnInit {
  idJuego:number;
  idCurso:number;
  listaPreguntas:Pregunta[]=[];
  PROPIEDADES_VALIDAR_CAMBIOS_FORMULARIO:string[] = ['opcion1', 'opcion2', 'opcion3', 'opcion4'];


  formReto = this.formBuilder.group({
    preguntas: this.formBuilder.array([])
  })

  constructor(private preguntaService:PreguntaService, 
    private activeRoute:ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    protected autorizacionService:AutorizacionService,
    private estudianteJuegoRespuestaService: EstudianteJuegoRespuestaService,
    private location: Location, private router: Router ) { }
  

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idJuego = params.idJuego;
      this.idCurso= params.idCurso;
      this.obtenerlistadoPreguntas(this.idJuego);

    });
  }
  obtenerlistadoPreguntas(idJuego:number){
    this.preguntaService.listarPorIdReto(idJuego).subscribe(preguntas =>{
      this.listaPreguntas = preguntas;
      console.log('Juegos: ',  preguntas)
    });
  }
  inicial(){
    this.router.navigate(['/listado-cursos']);
  }
 



}
