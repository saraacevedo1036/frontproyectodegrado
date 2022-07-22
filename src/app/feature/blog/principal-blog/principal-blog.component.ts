import { Component,  OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { Contenido } from '../../contenido-curso/shared/model/contenido.model';
import { ContenidoService } from '../../contenido-curso/shared/service/contenido.service';
import { Categoria } from '../../cursos/shared/model/categoria.model';
import { CategoriaService } from '../../cursos/shared/service/categoria.service';

@Component({
  selector: 'app-principal-blog',
  templateUrl: './principal-blog.component.html',
  styleUrls: ['./principal-blog.component.css']
})
export class PrincipalBlogComponent implements OnInit {

  esCrearCategoria:boolean=false
  idCurso:number;
  listaCategorias:Categoria[] = [];
  INICIO_URL_YOUTUBE:string='https://www.youtube.com/watch?v='

  formularioBlog = this.formBuilder.group({
    titulo:['',Validators.required],
    descripcion:['',[Validators.required,Validators.maxLength(1000)]],
    imagen:['',],
    video:['',],
    categoria:['',Validators.required],
    crearCategoria:[''],
    usarCategoria:['']
  }); 
  toppings = this.formBuilder.group({
    crearCategoria: false,
    usarCategoria: false,
   
  });

  constructor(private categoriaService:CategoriaService,
    private formBuilder: UntypedFormBuilder,
    public modalCat: MatDialog,
    private activeRoute: ActivatedRoute,
    private contenidoService:ContenidoService,
    _formBuilder: FormBuilder
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
  validarCrearCategoria(){
    if(this.toppings.controls.crearCategoria.value===true){
      

    }else{
      this.esCrearCategoria=false;
     
    }
  }
  validarCategoria(){
    if(this.formularioBlog.controls.usarCategoria.value===true){
      this.esCrearCategoria=false;

    }else{
      this.esCrearCategoria=true;
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
  validarUrlYoutube(){

    let inicioUrlVideo:boolean=true
    if(this.formularioBlog.controls.video.touched){
      inicioUrlVideo=this.formularioBlog.controls.video.value.containies(this.INICIO_URL_YOUTUBE)
      
    }
    this.formularioBlog.controls.video.errors.value=inicioUrlVideo;
  }

  
  onSbmit(){
    event.preventDefault();
      if (this.formularioBlog.valid  ) {
        this.guardarContenido();
        this.showModalCorrecto()
        const value = this.formularioBlog.value;
        console.log(value);
      } else {
        this.formularioBlog.markAllAsTouched();
        this.showModalIncorrecto()
      }

    
  }
  showModalCorrecto(){
    Swal.fire({
      icon: 'success',
      title: 'El contenido se guardo con exito',
    })
  }
  showModalIncorrecto(){
    Swal.fire({
      icon: 'error',
      title: 'Validar los datos ingresados como lo son categoria,Titulo y Descripcion',
    })
  }

}
