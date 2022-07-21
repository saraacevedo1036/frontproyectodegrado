import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})

export class ListadoCategoriasComponent implements OnInit {

  constructor( public modal: MatDialogRef<ListadoCategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventosService: EventosService,
    private router: Router, public modalCat: MatDialog,
    protected autorizacionService: AutorizacionService) { }

  ngOnInit(): void {
    console.log('Información enviada categorias',this.data.categorias)
    console.log('Información enviada curso id: ',this.data.idCurso)
  }

  irAContenido(idCategoria: number){

    this.router.navigate(['listado-contenido','curso',this.data.idCurso,'categoria',idCategoria]);

    this.eventosService.disparador.emit(
      {idCategoria:idCategoria,
        idCurso:this.data.idCurso}
    );
    this.modal.close();
  }
  irAContenidoBlog(idCategoria: number){

    this.router.navigate(['listado-contenido','curso',this.data.idCurso,'categoria',idCategoria]);

    this.eventosService.disparador.emit(
      {idCategoria:idCategoria,
        idCurso:this.data.idCurso}
    );
    this.modal.close();
  }

 
  irAgregarCategoria(): void{
    this.router.navigateByUrl('crear-categoria');
    
   
    this.modal.close();
  } 
  crearContenido(): void{
    this.router.navigate(['crear-contenido',this.data.idCurso]);
    
    this.modal.close();
  } 

  cerrarModal(): void{
    this.modal.close();
  }
 

  puedeVisualizar():boolean{
    return  this.autorizacionService.esRolDocente();
  }
}


