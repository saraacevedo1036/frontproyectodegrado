import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Categoria } from '../../shared/model/categoria.model';
import { Curso } from '../../shared/model/curso.model';
import { CategoriaService } from '../../shared/service/categoria.service';
import { CursoService } from '../../shared/service/curso.service';
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
    private categoriaService:CategoriaService, public modal: MatDialog,public modalCur: MatDialog
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
  


}
