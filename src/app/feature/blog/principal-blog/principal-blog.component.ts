import { Component,  OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CrearCategoriaComponent } from '../../cursos/component/crear-categoria/crear-categoria.component';
import { Categoria } from '../../cursos/shared/model/categoria.model';
import { CategoriaService } from '../../cursos/shared/service/categoria.service';

@Component({
  selector: 'app-principal-blog',
  templateUrl: './principal-blog.component.html',
  styleUrls: ['./principal-blog.component.css']
})
export class PrincipalBlogComponent implements OnInit {
  listaCategorias:Categoria[]

  formularioBlog = this.formBuilder.group({
    titulo:[''],
    descripcion:[''],
    imagen:[''],
    video:['']
  }); 

  constructor(private categoriaService:CategoriaService,
    private formBuilder: UntypedFormBuilder,
    public modalCat: MatDialog
     ) { }

  ngOnInit(): void {
    this.obtenerListadoCategorias(1)

  }
  inicializarFormularioLogin(){
    this.formularioBlog = this.formBuilder.group({
      titulo:['', Validators.required],
      descripcion:['', Validators.required],
      imagen:['', Validators.required],
      video:['', Validators.required]    });
  }
  obtenerListadoCategorias(idCurso: number): Categoria[]{
    this.categoriaService.listarCategoriasPorIdCurso(idCurso).subscribe((data)=>{
      if(data.length > 0){
         this.listaCategorias = data;
      }else{
        console.log('No tiene Categorias, mostrar este mensaje')
        this.listaCategorias = [];
      }
    });
    return this.listaCategorias;
  }
  modalCrearCategoria(){
    
    this.modalCat.open(CrearCategoriaComponent,{
      width: '450px'});
  }
  

}
