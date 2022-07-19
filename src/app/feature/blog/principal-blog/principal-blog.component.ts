import { Component,  OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Contenido } from '../../contenido-curso/shared/model/contenido.model';
import { ContenidoService } from '../../contenido-curso/shared/service/contenido.service';
import { CrearCategoriaComponent } from '../../cursos/component/crear-categoria/crear-categoria.component';
import { Categoria } from '../../cursos/shared/model/categoria.model';
import { CategoriaService } from '../../cursos/shared/service/categoria.service';

@Component({
  selector: 'app-principal-blog',
  templateUrl: './principal-blog.component.html',
  styleUrls: ['./principal-blog.component.css']
})
export class PrincipalBlogComponent implements OnInit {

  idCurso:number;
  listaCategorias:Categoria[] = [];

  formularioBlog = this.formBuilder.group({
    titulo:[''],
    descripcion:[''],
    imagen:[''],
    video:[''],
    categoria:[''],
    crearCategoria:['']
  }); 

  constructor(private categoriaService:CategoriaService,
    private formBuilder: UntypedFormBuilder,
    public modalCat: MatDialog,
    private activeRoute: ActivatedRoute,
    private contenidoService:ContenidoService
     ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idCurso = params.idCurso
      this.obtenerListadoCategorias(this.idCurso);
    });
   
  }

  inicializarFormularioLogin(){
    this.formularioBlog = this.formBuilder.group({
      titulo:['', Validators.required],
      descripcion:['', Validators.required],
      imagen:['', Validators.required],
      video:['', Validators.required],
      categoria:['',Validators.required],
      crearCategoria:['']
        });
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
  
  armarObjetoContenido(): Contenido{
    return {
      idCategoriaContenido: this.formularioBlog.controls.categoria.value.idCategoriaContenido,
      idCurso: this.idCurso,
      comentario: this.formularioBlog.controls.titulo.value,
      descripcion:  this.formularioBlog.controls.descripcion.value,
      imagen:  this.formularioBlog.controls.imagen.value,
      video:  this.formularioBlog.controls.video.value
      };
  }

  guardarContenido(){
    this.contenidoService.guardarContenido(this.armarObjetoContenido())
    .subscribe(contenido =>{
      console.log('Se guarda contenido:', contenido)
    });
  }
  validarCategoria(){
    if(this.formularioBlog.controls.crearCategoria.value===true){
      return true

    }else{
      return false
    }
  }

  //Obtener id categoria a partir de nombre
  obtenerIdCategoriaSeleccionada(): number{
    return  this.listaCategorias.find(categoria => categoria.nombre ==
       this.formularioBlog.controls.categoria.value).idCategoriaContenido;
  }
  verVideo(){
    return this.formularioBlog.controls.video.value
  }
  verImagen(){
    return this.formularioBlog.controls.imagen.value
  }

  onSbmit(){
    this.guardarContenido();
  }

}
