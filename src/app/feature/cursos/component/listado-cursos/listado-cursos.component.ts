import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Categoria } from '../../shared/model/categoria.model';
import { Curso } from '../../shared/model/curso.model';
import { CategoriaService } from '../../shared/service/categoria.service';
import { CursoService } from '../../shared/service/curso.service';
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
    private categoriaService:CategoriaService, public modal: MatDialog
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

  modalCategoria(categoriasCurso:Categoria[], idCurso:number){
    if(categoriasCurso.length > 0){
      this.modal.open(ListadoCategoriasComponent,{
        width: '450px',
        data: {categorias : categoriasCurso , idCurso: idCurso}
      });
    }
  }

  obtenerListadoCategorias(idCurso: number): Categoria[]{
    this.categoriaService.listarCategoriasPorIdCurso(idCurso).subscribe((data)=>{
      if(data.length > 0){
         this.listaCategorias = data;
         this.modalCategoria(data,idCurso);
      }else{
        console.log('No tiene Categorias, mostrar este mensaje')
        this.listaCategorias = [];
      }
    });
    return this.listaCategorias;
  }
}
