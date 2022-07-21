import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListadoCategoriasComponent } from 'src/app/feature/cursos/component/listado-categorias/listado-categorias.component';
import { Categoria } from 'src/app/feature/cursos/shared/model/categoria.model';
import { CategoriaService } from 'src/app/feature/cursos/shared/service/categoria.service';
import { CursoService } from 'src/app/feature/cursos/shared/service/curso.service';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { Estudiante } from 'src/app/feature/usuario/model/estudiante.model';
import { EstudianteService } from 'src/app/feature/usuario/service/estudiante.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  esRolDocente: boolean = false
  listaEstudiantes: Estudiante[] = [];
  listaCategorias: Categoria[];
  idCurso: number

  constructor(private categoriaService:CategoriaService, public modal: MatDialog,
    private router: Router,   private activeRoute: ActivatedRoute, private cursoService:CursoService,
    private estudianteService:EstudianteService,
     protected autorizacionService: AutorizacionService 
    ) { }

  ngOnInit(): void {
   
    this.validarRol();
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idCurso = params.idCursos
    })
  }

  modalCategoria(categoriasCurso:Categoria[], idCurso:number){
    if(categoriasCurso.length > 0){
      this.modal.open(ListadoCategoriasComponent,{
        width: '450px',
        data: {categorias : categoriasCurso , idCurso: idCurso}
      });
    }
    else{
      this.modal.open(ListadoCategoriasComponent,{
        width: '450px',
        data: {categorias : categoriasCurso , idCurso: idCurso}
      });

    }
  }

  obtenerListadoCategorias(idCurso: number): Categoria[]{
    this.categoriaService.listarCategoriasPorIdCurso(idCurso).subscribe((data)=>{
      if(data.length > 0){
         this.listaCategorias = data;
         this.modalCategoria(data,idCurso);
      }else{
        console.log('No tiene Categorias, mostrar este mensaje')
        this.listaCategorias = [];
        this.modalCategoria([],idCurso);
      }
    });
    return this.listaCategorias;
  }
  
  irJuego(): void{
    this.router.navigate(['cursos',this.idCurso,'juego']);
    
  } 

  irReto(): void{
    this.router.navigate(['cursos',this.idCurso,'reto']);

  } 
  irTablaReto(): void{
    this.router.navigate(['tablaRetos',this.idCurso,'reto']);

  } 
  irListaEstudiante(): void{
    this.router.navigate(['curso',this.idCurso,'estudiante']);

  } 

  

  validarRol(){
    
   return this.autorizacionService.esRolDocente()

  }
}
