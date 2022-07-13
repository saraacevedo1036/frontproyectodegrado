import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contenido } from '../../contenido-curso/shared/model/contenido.model';

@Component({
  selector: 'app-registros-blog',
  templateUrl: './registros-blog.component.html',
  styleUrls: ['./registros-blog.component.css']
})
export class RegistrosBlogComponent implements OnInit {

  constructor(
    private router: Router) { 
      
    }

  ngOnInit(): void {
  }
  postBlog(){
    
    this.router.navigate(['/post-blog']);
  }
  

}
