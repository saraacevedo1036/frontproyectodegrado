import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../shared/model/categoria.model';
import { CategoriaService } from '../../shared/service/categoria.service';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})

export class ListadoCategoriasComponent implements OnInit {

  listaCategorias: Categoria[] = [{idCategoriaContenido:1,idPregunta:2,nombre:'suma'},
  {idCategoriaContenido:1,idPregunta:2,nombre:'resta'}]; 


  constructor(private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.obtenerListadoCursos(1);
  }

  obtenerListadoCursos(idCurso: number){
    this.categoriaService.listarCategoriasPorIdCurso(idCurso).subscribe((data)=>{
      if(data){
        this.listaCategorias = data;
      }else{
        console.log('No tiene Categorias, mostrar este mensaje')
      }
    });
  }
}
