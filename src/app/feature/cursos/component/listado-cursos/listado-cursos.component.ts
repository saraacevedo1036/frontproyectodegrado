import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal from 'sweetalert2';
import { Categoria } from '../../shared/model/categoria.model';
import { Curso } from '../../shared/model/curso.model';
import { CursoService } from '../../shared/service/curso.service';
import { AgregarAsignaturaComponent } from '../agregar-asignatura/agregar-asignatura.component';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

  public colSize=6;
  public isMobile: boolean =false;
  listaCategorias: Categoria[] = []; 
  listaCursos: Curso[] = []; 
  constructor(breakpointObserver:BreakpointObserver,
    private cursoService: CursoService,private router: Router,
     public modal: MatDialog,public modalCur: MatDialog,
    protected autorizacionService: AutorizacionService
    ) {breakpointObserver.observe([Breakpoints.Handset]).subscribe(result=>{
      this.isMobile=result.matches;
      if(this.isMobile){
        this.colSize=2;
      }else{
        this.colSize=6
      }
    }) }

  ngOnInit(): void {
    this.obtenerListadoCursos();
  }

  obtenerListadoCursos(){
    this.cursoService.listarCursosPorDocenteId().subscribe((data)=>{
      if(data.length > 0){
        this.listaCursos = data;
      }else{
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

  showModalCodigo(codigo:string){
    Swal.fire({
      icon: 'info',
      title: 'Codigo ',
      text: codigo,
    })
  }
  
}
