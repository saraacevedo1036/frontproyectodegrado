import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import { Reporte } from '../../shared/model/reporte-estudiante.model';
import { EstudianteJuegoService } from '../../shared/service/estudiante-juego.service';

@Component({
  selector: 'app-lista-reporte',
  templateUrl: './lista-reporte.component.html',
  styleUrls: ['./lista-reporte.component.css']
})
export class ListaReporteComponent implements OnInit {

  idReto:number 
  
  listaReportes: Reporte[] = [];
  constructor(private estudianteJuegoService: EstudianteJuegoService,
      private activeRoute: ActivatedRoute,
    private router: Router,
    protected autorizacionService: AutorizacionService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idReto = params.idReto
      this.obtenerlistadoReportes(this.idReto);
    })
  }

  obtenerlistadoReportes(idReto:number){
    this.estudianteJuegoService.listarReporte(idReto).subscribe(reportes =>{
      this.listaReportes = reportes;
      console.log('Reportes: ',  reportes)
    });
  }
  irJuego(idJuego:number): void{

    this.router.navigate(['reto',idJuego]) 
  }
  
  irCrearReto(): void{
    this.router.navigateByUrl('crear-reto');
    
    
  } 
  puedeVisualizar():boolean{
    return  this.autorizacionService.esRolDocente();
  }
}