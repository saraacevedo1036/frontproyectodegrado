import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal from 'sweetalert2';
import { Estudiante } from '../../model/estudiante.model';
import { EstudianteService } from '../../service/estudiante.service';

@Component({
  selector: 'app-lista-estudiante-curso',
  templateUrl: './lista-estudiante-curso.component.html',
  styleUrls: ['./lista-estudiante-curso.component.css']
})
export class ListaEstudianteCursoComponent implements OnInit {

  
  idCurso:number 
  listaEstudiantes: Estudiante[] = [];
  constructor(private eventosService: EventosService,
    private estudianteService: EstudianteService,  private activeRoute: ActivatedRoute,
     private router: Router, protected autorizacionService: AutorizacionService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idCurso = params.idCursos
      this.obtenerlistadoEstudiantes(this.idCurso);
    })
  }

  obtenerlistadoEstudiantes(idCurso:number){
    this.estudianteService.listarEstudianteId(idCurso).subscribe(estudiantes =>{
      this.listaEstudiantes = estudiantes;
      console.log('Juegos: ',  estudiantes)
    });
  }
  
 

  ngOnDestroy(){
    //this.eventosService.disparador.unsubscribe();
  }
  puedeVisualizar():boolean{
    return  this.autorizacionService.esRolDocente();
  }
  
  

}


