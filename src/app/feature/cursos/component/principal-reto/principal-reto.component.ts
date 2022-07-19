import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { take } from 'rxjs';
import { EventosService } from 'src/app/core/service/eventos.service';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { Reto } from '../../shared/model/reto.model';
import { RetoService } from '../../shared/service/reto.service';
import { CrearJuegoComponent } from '../crear-juego/crear-juego.component';

@Component({
  selector: 'app-principal-reto',
  templateUrl: './principal-reto.component.html',
  styleUrls: ['./principal-reto.component.css']
})
export class PrincipalRetoComponent implements OnInit, OnDestroy {

  TIPO_RETO: string = "R";
  idCurso:number 
  listaRetos: Reto[] = [];
  constructor(private eventosService: EventosService,
    private retoService: RetoService,  private activeRoute: ActivatedRoute,
    private router: Router,
    protected autorizacionService: AutorizacionService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idCurso = params.idCursos
      this.obtenerlistadoRetos(this.idCurso);
    })
  }

  obtenerlistadoRetos(idCurso:number){
    this.retoService.listarPorIdCursoYTipo(idCurso,this.TIPO_RETO).subscribe(retos =>{
      this.listaRetos = retos;
      console.log('Retos: ',  retos)
    });
  }
  
  irCrearReto(): void{
    this.router.navigateByUrl('crear-reto');
    
    
  } 
  puedeVisualizar():boolean{
    return  this.autorizacionService.esRolDocente();
  }

  ngOnDestroy(){
    //this.eventosService.disparador.unsubscribe();
  }
}
