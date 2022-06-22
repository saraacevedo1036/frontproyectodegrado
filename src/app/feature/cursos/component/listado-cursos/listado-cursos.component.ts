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

  
  listaCategorias: Categoria[] = [{idCategoriaContenido:1,idPregunta:2,nombre:'suma'},
  {idCategoriaContenido:1,idPregunta:2,nombre:'resta'}]; 
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
        console.log('No tiene cursos, mostrar este emnsaje')
      }
    });
  }

 /* listarCategoria(){
    this.router.navigateByUrl('listado-categoria');
  }*/

  abrirModalCategorias(idCurso: number): void{
    const listaCategorias = this.obtenerListadoCategorias(idCurso);
    console.log(listaCategorias)
    this.modal.open(ListadoCategoriasComponent,{
      width: '450px',
      data: this.listaCategorias
    });

  }

  obtenerListadoCategorias(idCurso: number){
    this.categoriaService.listarCategoriasPorIdCurso(idCurso).subscribe((data)=>{
      if(data.length > 0){
        this.listaCategorias = data;
      }else{
        console.log('No tiene Categorias, mostrar este mensaje')
      }
    });
  }
}
