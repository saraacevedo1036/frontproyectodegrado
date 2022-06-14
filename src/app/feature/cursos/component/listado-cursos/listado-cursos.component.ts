import { Component, OnInit } from '@angular/core';
import { Curso } from '../../shared/model/curso.model';
import { CursoService } from '../../shared/service/curso.service';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

  listaCursos: Curso[] = []; 
  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.obtenerListadoCursos(1);
  }

  obtenerListadoCursos(idDocente:number){
    this.cursoService.listarCursosPorDocenteId(idDocente).subscribe((data)=>{
      if(data){
        this.listaCursos = data;
      }else{
        console.log('No tiene cursos, mostrar este emnsaje')
      }
    });
  }
}
