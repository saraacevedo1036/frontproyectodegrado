import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventosService } from 'src/app/core/service/eventos.service';

@Component({
  selector: 'app-crear-juego',
  templateUrl: './crear-juego.component.html',
  styleUrls: ['./crear-juego.component.css']
})
export class CrearJuegoComponent implements OnInit {

  constructor(public modal: MatDialogRef<CrearJuegoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventosService: EventosService) { }

  ngOnInit(): void {
  }
  cerrarModal(): void{
    this.modal.close();
  }
}
