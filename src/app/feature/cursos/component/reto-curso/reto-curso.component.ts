import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, UntypedFormArray, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AutorizacionService } from 'src/app/feature/login/shared/service/autorizacion.service';
import Swal from 'sweetalert2';
import { EstudianteJuegoRespuesta } from '../../shared/model/estudiante-juego.respuesta.model';
import { Pregunta } from '../../shared/model/pregunta.model';
import { RespuestasReto } from '../../shared/model/respuestas-reto.model';
import { EstudianteJuegoRespuestaService } from '../../shared/service/estudiante-juego-respuesta.service';
import { PreguntaService } from '../../shared/service/pregunta.service';
import { Location } from '@angular/common'
import { RetoService } from 'src/app/shared/service/reto.service';
import { style } from '@angular/animations';

@Component({
  selector: 'app-reto-curso',
  templateUrl: './reto-curso.component.html',
  styleUrls: ['./reto-curso.component.css']
})
export class RetoCursoComponent implements OnInit {
  idCurso:number;
  resultadoPrueba:string;
  idJuego:number;
  listaPreguntas:Pregunta[]=[];
  PROPIEDADES_VALIDAR_CAMBIOS_FORMULARIO:string[] = ['opcion1', 'opcion2', 'opcion3', 'opcion4'];


  formReto = this.formBuilder.group({
    preguntas: this.formBuilder.array([])
  })

  constructor(private preguntaService:PreguntaService, 
    private activeRoute:ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    protected autorizacionService:AutorizacionService,
    private estudianteJuegoRespuestaService: EstudianteJuegoRespuestaService,
    private location: Location,
    private retoService: RetoService
     ) { }
  

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.idCurso = params.idCursos;
      this.idJuego = params.idJuego;
      this.obtenerListaPreguntas();
    });
  }

  obtenerListaPreguntas(){
    this.preguntaService.listarPorIdReto(this.idJuego).subscribe(preguntas=>{
      if(preguntas.length>0){
        this.listaPreguntas=preguntas;
        this.listaPreguntas.forEach((pregunta:Pregunta) => this.agregarPregunta(pregunta))
      }else{
        this.listaPreguntas = [];
      }
      
    })
  }

  obtenerValorControl(index:any, controlname: string){
    const itemControls = <FormArray>this.formReto.controls['preguntas'];
    const itemFormGroup = <FormGroup>itemControls.controls[index];
    return itemFormGroup.get(controlname).value
  }

  inacticarValorControl(index:any, controlname: string){
    const itemControls = <FormArray>this.formReto.controls['preguntas'];
    const itemFormGroup = <FormGroup>itemControls.controls[index];
    return itemFormGroup.get(controlname).setValue(false)
  }

  get preguntas(){
    return this.formReto.controls["preguntas"] as UntypedFormArray;
  }

  agregarPregunta(pregunta: Pregunta){

    const form = this.formBuilder.group({
    pregunta: [''],
    imagen:   [''],
    idPregunta:[''],
    opcion1: false,
    opcion2: false,
    opcion3: false,
    opcion4: false,
  });

  form.controls.pregunta.setValue(pregunta.texto);
  form.controls.imagen.setValue(pregunta.imagen);
  form.controls.idPregunta.setValue(pregunta.idPregunta);


  form.controls.pregunta.disable()
  form.controls.imagen.disable();
  form.controls.idPregunta.disable();

  this.preguntas.push(form);

  }

  enviarRespuestas(){
    this.estudianteJuegoRespuestaService.calificar(this.armarObjetoAEnviar()).subscribe(calificacion =>{
      this.mostrarModalPuntuacion(calificacion)
      this.location.back();
      })
  }

  armarObjetoAEnviar():RespuestasReto{
    const listaPreguntas:EstudianteJuegoRespuesta[] = [];
    let contador:number = 0;
    this.formReto.controls.preguntas.value.forEach((respuesta:any) =>{
      listaPreguntas.push(this.armarRespuesta(respuesta,
       this.listaPreguntas[contador]));
       contador = contador + 1;
    })

    return {
      correoEstudiante:this.autorizacionService.obtenerCorreo(),
      listaEstudianteJuegoRespuestas: listaPreguntas
    }
  }

  armarRespuesta(respuesta: any,pregunta:Pregunta):EstudianteJuegoRespuesta{
    return{
      idPreguntas: pregunta.idPregunta,
      idReto:this.idJuego,
      respuesta:this.validarRespuesta(respuesta,pregunta),
      estado:true
    } 
  }

  validarRespuesta(respuestas: any,pregunta:Pregunta):string{
    if(respuestas.opcion1===true){
      return pregunta.opcion1
    }
    else if(respuestas.opcion2===true){
      return pregunta.opcion2
    }
    else if(respuestas.opcion3===true){
      return pregunta.opcion3
    }
    else if(respuestas.opcion4===true){
      return pregunta.opcion4 
    }
    return '';
  }

  detectarCambiosFormulario(index: string, propiedadSelecionada:string){

      this.PROPIEDADES_VALIDAR_CAMBIOS_FORMULARIO.forEach(propiedad => {
        if(propiedad !=propiedadSelecionada){
          this.formReto.controls['preguntas'].get(index.toString()).get(propiedad.toString()).setValue(false)
        }
      });
  }

  mostrarModalPuntuacion(calificacion:any){
    if((calificacion)>=3){
       this.resultadoPrueba='Exelente cumpliste con el objetivo <br /> Nota: ';

    }else{
      this.resultadoPrueba='Debes practicar un poco más <br /> Nota: ';
    }

    Swal.fire({
      title: this.resultadoPrueba.concat(parseFloat(calificacion).toFixed(1)) ,
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
      
  }
  validarRolEstudiante(){
    if(this.autorizacionService.esRolEstudiante()==true){
    return true;
  }else{
    return false
  }
}
visualizarImagen(urlImagen:string):boolean{
  return urlImagen!==''?true:false
  
}
borrarReto(){
  Swal.fire({
    title: 'Esta seguro de eliminar este Reto?',
    text: "Si eliminas el reto este no se podra recuperar!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: 'Si, eliminar ahora!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.retoService.eliminarReto(this.idJuego).subscribe(respuesta=>{
        this.location.back();
      })

      Swal.fire(
        'Eliminado!',
        'El reto se ha eliminado con exito.',
        'success'
      )
    }
  })
}

}