import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CreacionReto } from '../../shared/model/creacion-reto.model';
import { Pregunta } from '../../shared/model/pregunta.model';
import { JuegoService } from '../../shared/service/juego.services';
import { Location } from '@angular/common'
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-crear-reto',
  templateUrl: './crear-reto.component.html',
  styleUrls: ['./crear-reto.component.css']
})
export class CrearRetoComponent implements OnInit {
  TIPO_RETO: string = "R";
  agregoPregunta: number = 0;
  idCurso: number

  form = this.formBuilder.group({
    preguntas: this.formBuilder.array([])
  })

  formularioReto = this.formBuilder.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.maxLength(500)],
    comentario: ['', Validators.maxLength(500)]
  });

  constructor(private formBuilder: UntypedFormBuilder, private juegoService: JuegoService,
    private location: Location, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.idCurso = params.idCursos;
    })
  }

  inicializarFormularioLogin() {
    this.formularioReto = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      comentario: ['']
    });
  }
  save() {

    if (this.formularioReto.valid) {
      const value = this.formularioReto.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  guardar() {
    if (this.formularioReto.valid && this.form.valid) {
      const value = this.formularioReto.value;
      console.log('RETO: ', value);
      const valuePre = this.form.value.preguntas;
      console.log('Preguntas: ', valuePre)
      this.agregarReto();
      console.log('CREACION RETO', this.armarObjetoAGuardar())
      this.showModalCorrecto()
      this.location.back();
    } else {
      this.showModalIncorrecto()

    }
  }

  agregarReto() {
    this.juegoService.guardarJuego(this.armarObjetoAGuardar())
      .subscribe(contenido => {
        console.log('Se guarda contenido', contenido)
      });


  }

  armarObjetoAGuardar(): CreacionReto {
    const listaPreguntas: Pregunta[] = [];
    this.form.value.preguntas.forEach((pregunta: any) => {
      listaPreguntas.push(this.armarPregunta(pregunta));
    });
    return {
      reto: {
        idCurso: this.idCurso,
        tipo: this.TIPO_RETO,
        titulo: this.formularioReto.controls.titulo.value,
        descripcion: this.formularioReto.controls.descripcion.value,
        comentario: this.formularioReto.controls.comentario.value,
        estado: true
      },
      listaPreguntas: listaPreguntas
    };
  }

  armarPregunta(preguntaForm: any): Pregunta {
    return {
      texto: preguntaForm.pregunta,
      imagen: preguntaForm.imagen,
      respuesta: this.validarRespuesta(preguntaForm),
      opcion1: preguntaForm.opcion1,
      opcion2: preguntaForm.opcion2,
      opcion3: preguntaForm.opcion3,
      opcion4: preguntaForm.opcion4,
      estado: true
    }
  }



  get preguntas() {
    return this.form.controls["preguntas"] as UntypedFormArray;
  }

  agregarPregunta() {
    this.agregoPregunta = this.agregoPregunta + 1;

    const preguntaForm = this.formBuilder.group({
      pregunta: ['', Validators.required],
      imagen: [''],
      opcion1: ['', Validators.required],
      opcion2: ['', Validators.required],
      opcion3: ['', Validators.required],
      opcion4: ['', Validators.required],
      respuesta: ['', Validators.required]

    });

    this.preguntas.push(preguntaForm);


  }

  borrarPregunta(preguntaIndex: number) {
    this.agregoPregunta = this.agregoPregunta - 1;

    this.preguntas.removeAt(preguntaIndex);

  }

  showModalCorrecto() {
    Swal.fire({
      icon: 'success',
      title: 'El reto se guardo con exito',
    })
  }

  showModalIncorrecto() {
    Swal.fire({
      icon: 'error',
      title: 'Validar los datos ingresados ',
      text: 'Recuerda que el formulario de pregunta debe estar diligenciado',

    })
  }

  validarRespuesta(pregunta: Pregunta) {
    switch (pregunta.respuesta) {
      case 'opcion1':
        return pregunta.opcion1
      case 'opcion2':
        return pregunta.opcion2
      case 'opcion3':
        return pregunta.opcion3
      case 'opcion4':
        return pregunta.opcion4
      default:
        return '';
    }
  }

}
