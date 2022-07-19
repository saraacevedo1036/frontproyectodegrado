import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contenido } from '../../shared/model/contenido.model';
import { ContenidoService } from '../../shared/service/contenido.service';

@Component({
  selector: 'app-listado-contenido',
  templateUrl: './listado-contenido.component.html',
  styleUrls: ['./listado-contenido.component.css']
})
export class ListadoContenidoComponent implements OnInit, OnDestroy {

  listaContenidos: Contenido[] = []; 
  idCurso:number;
  idCategoria:number;
  idCursoContenido:number;
  //@ViewChild(MatTable) table: MatTable<>;
  dataSource = new MatTableDataSource<Contenido>([]);

  constructor(

    private contenidoService: ContenidoService,
    private activeRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
   
  }

 

  obtenerlistadoContenido(idCategoria:number, idCurso:number){
    this.contenidoService.listarContenidoPorIdCategoriaYIdCurso(idCategoria, idCurso)
    .subscribe(contenidos =>{
      if(contenidos.length > 0){
        this.listaContenidos = contenidos;
        this.dataSource.data = contenidos;
      }else{
        console.log('No tiene Contenidos, mostrar este mensaje')
        this.listaContenidos = [];
      }
      console.log('Contenidos: ',  this.listaContenidos)
      console.log('dataSourse: ',  this.dataSource.data)

    });
  }
  postBlog(){
    
    this.router.navigate(['/post-blog']);
  }
  ngOnDestroy(){
    //this.eventosService.disparador.unsubscribe();
  }
  

}
