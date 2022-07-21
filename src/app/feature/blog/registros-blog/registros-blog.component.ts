import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contenido } from '../../contenido-curso/shared/model/contenido.model';
import { ContenidoService } from '../../contenido-curso/shared/service/contenido.service';
import { AutorizacionService } from '../../login/shared/service/autorizacion.service';

@Component({
  selector: 'app-registros-blog',
  templateUrl: './registros-blog.component.html',
  styleUrls: ['./registros-blog.component.css']
})
export class RegistrosBlogComponent implements OnInit {

  listaContenidos: Contenido[] = []; 
  displayedColumns : string [] = [ 'descripcion'];
  idCurso:number;
  idCategoria:number;
  idCursoContenido:number;
  //@ViewChild(MatTable) table: MatTable<>;
  dataSource = new MatTableDataSource<Contenido>([]);

  constructor(

    private contenidoService: ContenidoService,
    private activeRoute: ActivatedRoute, 
    private router: Router,
    protected autorizacionService: AutorizacionService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idCurso = params.idCurso;
      this.idCategoria = params.idCategoria;
      this.obtenerlistadoContenido(this.idCategoria, this.idCurso);
    });
  }

 /* inicializarSuscripciones(){
    this.eventosService.disparador.pipe(take(1)).subscribe(data =>{
      this.obtenerlistadoContenido(data);
      console.log('Recibiendo data:', data)
    })
  }*/

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
  rolDocente(){
    if(this.autorizacionService.esRolDocente()){
      return true
    }
    else{
      return false
    }

  }
  visualizarImagen(urlImagen:string):boolean{
    return urlImagen!==''?true:false
    
  }
  visualizarVideo(urlVideo:string):boolean{
    return urlVideo!==''?true:false
    
  }
  borrarContenido(idCursoContenido:number){
    
  }

}
