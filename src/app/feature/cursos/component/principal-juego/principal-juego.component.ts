import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
import { Juego } from '../../shared/model/juego.model';
import { JuegoService } from '../../shared/service/juego.services';
import { CrearJuegoComponent } from '../crear-juego/crear-juego.component';

@Component({
  selector: 'app-principal-juego',
  templateUrl: './principal-juego.component.html',
  styleUrls: ['./principal-juego.component.css']
})
export class PrincipalJuegoComponent implements OnInit {

  TIPO_JUEGO: string = "J";
  idCurso:number 
  listaJuegos: Juego[] = [];
  constructor(private eventosService: EventosService,
    private juegoService: JuegoService,  private activeRoute: ActivatedRoute, public modaljueg: MatDialog) { }

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
  modalCrearJuego(){
    
    this.modaljueg.open(CrearJuegoComponent,{
      width: '450px'});
  }

  ngOnDestroy(){
    //this.eventosService.disparador.unsubscribe();
  }

}
