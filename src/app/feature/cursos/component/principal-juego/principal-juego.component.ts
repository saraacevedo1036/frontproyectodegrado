import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal from 'sweetalert2';
import { Juego } from '../../shared/model/juego.model';
import { JuegoService } from '../../shared/service/juego.services';

@Component({
  selector: 'app-principal-juego',
  templateUrl: './principal-juego.component.html',
  styleUrls: ['./principal-juego.component.css']
})
export class PrincipalJuegoComponent implements OnInit {
  public colSize=6;
  public isMobile: boolean =false;
  TIPO_JUEGO: string = "J";
  idCurso:number 
  listaJuegos: Juego[] = [];
  constructor(breakpointObserver:BreakpointObserver,
    private eventosService: EventosService,
    private juegoService: JuegoService,  private activeRoute: ActivatedRoute,
     private router: Router, protected autorizacionService: AutorizacionService ) {breakpointObserver.observe([Breakpoints.Handset]).subscribe(result=>{
      this.isMobile=result.matches;
      if(this.isMobile){
        this.colSize=2;
      }else{
        this.colSize=6
      }
    }) }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idCurso = params.idCursos
      this.obtenerlistadoJuegos(this.idCurso);
    })
  }

  obtenerlistadoJuegos(idCurso:number){
    this.juegoService.listarPorIdCursoYTipo(idCurso,this.TIPO_JUEGO).subscribe(juegos =>{
      this.listaJuegos = juegos;
      console.log('Juegos: ',  juegos)
    });
  }
  
  irCrearJuego(): void{
    this.router.navigate(['curso',this.idCurso,'crear-juego']); 
  } 
 

  ngOnDestroy(){
    //this.eventosService.disparador.unsubscribe();
  }
  puedeVisualizar():boolean{
    return  this.autorizacionService.esRolDocente();
  }
  irJuego(idJuego:number): void{

    this.router.navigate(['juego',idJuego,'curso',this.idCurso]) 
  }
  showModalCodigo(descripcion:string){
    Swal.fire({
      icon: 'info',
      title: 'Descripción ',
      text: descripcion ,
    })
  }
  

}
