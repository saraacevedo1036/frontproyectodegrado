import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs';
import { EventosService } from 'src/app/core/service/eventos.service';
import { Contenido } from '../../shared/model/contenido.model';
import { ContenidoService } from '../../shared/service/contenido.service';

@Component({
  selector: 'app-listado-contenido',
  templateUrl: './listado-contenido.component.html',
  styleUrls: ['./listado-contenido.component.css']
})
export class ListadoContenidoComponent implements OnInit, OnDestroy {

  listaContenidos: Contenido[] = []; 
  displayedColumns : string [] = [ 'descripcion'];
  //@ViewChild(MatTable) table: MatTable<>;
  dataSource = new MatTableDataSource<Contenido>([]);

  constructor(private eventosService: EventosService,
    private contenidoService: ContenidoService) { }

  ngOnInit(): void {
    //this.listaContenidos = [];
    this.inicializarSuscripciones();
  }

  inicializarSuscripciones(){
    this.eventosService.disparador.pipe(take(1)).subscribe(data =>{
      this.obtenerlistadoContenido(data);
      console.log('Recibiendo data:', data)
    })
  }

  obtenerlistadoContenido(data:any){
    this.contenidoService.listarContenidoPorIdCategoriaYIdCurso(data.idCategoria, data.idCurso)
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
  
  ngOnDestroy(){
    //this.eventosService.disparador.unsubscribe();
  }

}
