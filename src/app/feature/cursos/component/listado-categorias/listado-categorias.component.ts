import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Categoria } from '../../shared/model/categoria.model';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})

export class ListadoCategoriasComponent implements OnInit {


  constructor( public modal: MatDialogRef<ListadoCategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Categoria[]) { }

  ngOnInit(): void {
    console.log('Información enviada',this.data)
  }

  cerrarModal(): void{
    this.modal.close();
  }

}
