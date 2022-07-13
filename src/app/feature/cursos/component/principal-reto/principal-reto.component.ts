import { Component, OnDestroy, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { EventosService } from 'src/app/core/service/eventos.service';
import { Reto } from '../../shared/model/reto.model';
import { RetoService } from '../../shared/service/reto.service';

@Component({
  selector: 'app-principal-reto',
  templateUrl: './principal-reto.component.html',
  styleUrls: ['./principal-reto.component.css']
})
export class PrincipalRetoComponent implements OnInit, OnDestroy {

  TIPO_RETO: string = "R";
  idcurso:number = 0
  listaRetos: Reto[] = [];
  constructor(private eventosService: EventosService,
    private retoService: RetoService) { }

  ngOnInit(): void {
    this.inicializarSuscripciones();
    this.obtenerlistadoRetos(1);
  }


  inicializarSuscripciones(){
    this.eventosService.disparadorReto.subscribe(data =>{
      this.idcurso = data.idCurso;
      this.obtenerlistadoRetos(data.idCurso);
      console.log('Recibiendo data Reto:', data)
    })
  }

  obtenerlistadoRetos(idcurso:number){
    this.retoService.listarPorIdCursoYTipo(idcurso,this.TIPO_RETO).subscribe(retos =>{
      this.listaRetos = retos;
      console.log('Retos: ',  retos)
    });

  }

  ngOnDestroy(){
    //this.eventosService.disparador.unsubscribe();
  }
}
