import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { Categoria } from '../../shared/model/categoria.model';
import { Curso } from '../../shared/model/curso.model';
import { CategoriaService } from '../../shared/service/categoria.service';
import { CursoService } from '../../shared/service/curso.service';
import { AgregarAsignaturaComponent } from '../agregar-asignatura/agregar-asignatura.component';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';
import { ListadoCategoriasComponent } from '../listado-categorias/listado-categorias.component';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

  
  listaCategorias: Categoria[] = []; 
  listaCursos: Curso[] = []; 
  constructor(private cursoService: CursoService,private router: Router,
    private categoriaService:CategoriaService, public modal: MatDialog,public modalCur: MatDialog,
    protected autorizacionService: AutorizacionService
    ) { }

  ngOnInit(): void {
    this.obtenerListadoCursos();
  }

  obtenerListadoCursos(){
    this.cursoService.listarCursosPorDocenteId().subscribe((data)=>{
      if(data.length > 0){
        this.listaCursos = data;
      }else{
        console.log('No tiene cursos, mostrar este mensaje')
      }
    });
  }
  
  irInicio(): void{
    this.router.navigateByUrl('inicio');
    
  } 
  modalCrearCurso(){
    
    this.modalCur.open(CrearCursoComponent,{
      width: '450px'});
  }
  modalAgregarAsignatura(){
    
    this.modalCur.open(AgregarAsignaturaComponent,{
      width: '450px'});
  }
  puedeVisualizar():boolean{
    return  this.autorizacionService.esRolDocente();
  }
  puedeVisualizarEstudiante():boolean{
    return  this.autorizacionService.esRolEstudiante();
  }
  


}
