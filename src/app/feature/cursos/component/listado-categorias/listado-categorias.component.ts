import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})

export class ListadoCategoriasComponent implements OnInit {


  constructor( public modal: MatDialogRef<ListadoCategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventosService: EventosService,
    private router: Router) { }

  ngOnInit(): void {
    console.log('Información enviada categorias',this.data.categorias)
    console.log('Información enviada curso id: ',this.data.idCurso)

  }

  irAContenido(idCategoria: number){
    this.router.navigateByUrl('listado-contenido');
    this.eventosService.disparador.emit(
      {idCategoria:idCategoria,
        idCurso:this.data.idCurso}
    );
    this.modal.close();
  }

  cerrarModal(): void{
    this.modal.close();
  }

}
