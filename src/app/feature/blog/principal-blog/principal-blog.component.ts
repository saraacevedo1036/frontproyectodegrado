import { Component,  OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Contenido } from '../../contenido-curso/shared/model/contenido.model';
import { ContenidoService } from '../../contenido-curso/shared/service/contenido.service';
import { Categoria } from '../../cursos/shared/model/categoria.model';
import { CategoriaService } from '../../cursos/shared/service/categoria.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-principal-blog',
  templateUrl: './principal-blog.component.html',
  styleUrls: ['./principal-blog.component.css']
})
export class PrincipalBlogComponent implements OnInit {

  categoriaCreada:Categoria;
  esCrearCategoria:boolean=false;
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
    _formBuilder: FormBuilder, private location: Location
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
      idCategoriaContenido: this.determinarCategoria(),
      idCurso: this.idCurso,
      comentario: this.formularioBlog.controls.titulo.value,
      descripcion:  this.formularioBlog.controls.descripcion.value,
      imagen:  this.formularioBlog.controls.imagen.value,
      video:  this.formularioBlog.controls.video.value
      };
  }

  determinarCategoria():number{
    if(this.toppings.controls.usarCategoria.value==true){
      return this.formularioBlog.controls.categoria.value.idCategoriaContenido
    }
    else if(this.toppings.controls.crearCategoria.value==true){
      return this.categoriaCreada.idCategoriaContenido
    }
    else{
      return 0;
    }
  }

  guardarCategoria(){
     this.categoriaService.guardarCategorias(this.armarCategoria())
     .subscribe(categoria =>{
      this.categoriaCreada=categoria
      console.log(categoria)
      this.onSbmit()

     },error=>{
      console.log(error);
      
    });
  }

  armarCategoria():Categoria{
    return{
      nombre:this.formularioBlog.controls.categoria.value
    }
  }

  guardarContenido(){
    this.contenidoService.guardarContenido(this.armarObjetoContenido())
    .subscribe(contenido =>{
      console.log('Se guarda contenido:', contenido)
      this.showModal('success','El contenido se guardo con exito')
    },error=>{
     
      this.showModal('error','Validar los datos ingresados como lo son categoria,Titulo y Descripcion')
      
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
     this.formularioBlog.controls.video.setValue(this.formularioBlog.controls.video.value.replace( this.INICIO_URL_YOUTUBE, ""))
     return this.formularioBlog.controls.video.value

  }
  verImagen(){
    return this.formularioBlog.controls.imagen.value
  }
  
  onSbmit(){
    event.preventDefault();
      if (this.formularioBlog.valid  ) {
        this.guardarContenido();
        const value = this.formularioBlog.value;
        console.log(value);
        this.location.back()
      } else {
        this.formularioBlog.markAllAsTouched();
        this.showModal('error','Validar los datos ingresados como lo son categoria,Titulo y Descripcion')
      }
  }
 
  showModal(icon:SweetAlertIcon,title:string) {
    Swal.fire({
      icon: icon,
      title: title,
    })
  }
  infoUrlImagen(){
    
    Swal.fire({
      icon: 'info',
      text: 'Para subir una imagen te invitamos a ver el siguiente video!',
      footer: '<a href="https://www.youtube.com/watch?v=F1fCeOR_RIE">Clic para ver el video tutorial?</a>'
    })
  }
}
