import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { Reto } from '../../shared/model/reto.model';
import { RetoService } from '../../../../shared/service/reto.service';
import Swal from 'sweetalert2';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-principal-reto',
  templateUrl: './principal-reto.component.html',
  styleUrls: ['./principal-reto.component.css']
})
export class PrincipalRetoComponent implements OnInit {
  public colSize=6;
  public isMobile: boolean =false;
  TIPO_RETO: string = "R";
  idCurso:number 
  listaRetos: Reto[] = [];
  constructor(breakpointObserver:BreakpointObserver,
    private retoService: RetoService,  private activeRoute: ActivatedRoute,
    private router: Router,
    protected autorizacionService: AutorizacionService) {breakpointObserver.observe([Breakpoints.Handset]).subscribe(result=>{
      this.isMobile=result.matches;
      if(this.isMobile){
        this.colSize=2;
      }else{
        this.colSize=6
      }
    }) }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idCurso = params.idCursos;
      this.obtenerlistadoRetos(this.idCurso);
    })
  }

  obtenerlistadoRetos(idCurso:number){
    this.retoService.listarPorIdCursoYTipo(idCurso,this.TIPO_RETO).subscribe(retos =>{
      this.listaRetos = retos;
      console.log('Retos: ',  retos)
    });
  }

  irJuego(idJuego:number): void{

    this.router.navigate(['reto',idJuego,'curso',this.idCurso]) 
  }
  
  irCrearReto(): void{
    this.router.navigate(['curso',this.idCurso,'crear-reto']);  
  } 

  puedeVisualizar():boolean{
    return  this.autorizacionService.esRolDocente();
  }
  
  showModalCodigo(descripcion:string){
    Swal.fire({
      icon: 'info',
      title: 'Descripción ',
      text: descripcion ,
    })
  }
}
