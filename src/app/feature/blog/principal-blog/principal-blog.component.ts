import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal-blog',
  templateUrl: './principal-blog.component.html',
  styleUrls: ['./principal-blog.component.css']
})
export class PrincipalBlogComponent implements OnInit {
  formularioBlog = this.formBuilder.group({
    titulo:[''],
    descripcion:[''],
    imagen:[''],
    video:['']
  }); 

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
  }
  inicializarFormularioLogin(){
    this.formularioBlog = this.formBuilder.group({
      titulo:['', Validators.required],
      descripcion:['', Validators.required],
      imagen:['', Validators.required],
      video:['', Validators.required]
    });
  }
  

}
