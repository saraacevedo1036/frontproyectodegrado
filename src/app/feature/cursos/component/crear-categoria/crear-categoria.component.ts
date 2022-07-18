import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventosService } from 'src/app/core/service/eventos.service';
import { Categoria } from '../../shared/model/categoria.model';
import { CategoriaService } from '../../shared/service/categoria.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  constructor(public modal: MatDialogRef<CrearCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventosService: EventosService,
    private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }
  cerrarModal(): void{
    this.modal.close();
  }
  guardarCategoria(){
    this.categoriaService.guardarCategorias(this.generarCategoria()).subscribe(respuesta=>{
      
    });

  }
  generarCategoria():Categoria{
    return{
     nombre: this.data.nombre
    }
  }
}




