import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventosService } from 'src/app/core/service/eventos.service';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { Reto } from 'src/app/shared/model/reto.model';
import { RetoService } from 'src/app/shared/service/reto.service';

@Component({
  selector: 'app-tabla-retos',
  templateUrl: './tabla-retos.component.html',
  styleUrls: ['./tabla-retos.component.css']
})
export class TablaRetosComponent implements OnInit {

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
  irReporte(idReto:number): void{

    this.router.navigate(['reporte',idReto]) 
  }
  
  puedeVisualizar():boolean{
    return  this.autorizacionService.esRolDocente();
  }

  ngOnDestroy(){
    //this.eventosService.disparador.unsubscribe();
  }
}
