import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reto-curso',
  templateUrl: './reto-curso.component.html',
  styleUrls: ['./reto-curso.component.css']
})
export class RetoCursoComponent implements OnInit {
  public username: string ="";

  constructor(
    private router: Router) { 
      
    }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")!;
  }
 
}
