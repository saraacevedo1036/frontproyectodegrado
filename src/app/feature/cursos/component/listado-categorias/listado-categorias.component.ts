import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
import { CrearCategoriaComponent } from '../crear-categoria/crear-categoria.component';
@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})

export class ListadoCategoriasComponent implements OnInit {


  constructor( public modal: MatDialogRef<ListadoCategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventosService: EventosService,
    private router: Router, public modalCat: MatDialog) { }

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

  irRetos(): void{
    this.router.navigateByUrl('principal-retos');
    this.eventosService.disparadorReto.emit(
      {idCurso:this.data.idCurso}
    );
    this.modal.close();
  } 

  irJuegos(): void{
    this.router.navigateByUrl('principal-juegos');
    this.eventosService.disparadorJuego.emit(
      { idCurso:this.data.idCurso}
    );
    this.modal.close();
  } 
  irAgregarCategoria(): void{
    this.router.navigateByUrl('crear-categoria');
    
   
    this.modal.close();
  } 

  cerrarModal(): void{
    this.modal.close();
  }
  modalCrearCategoria(){
    
      this.modalCat.open(CrearCategoriaComponent,{
        width: '450px'});
    }
  }

