import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudianteCursoComponent } from './lista-estudiante-curso.component';

describe('ListaEstudianteCursoComponent', () => {
  let component: ListaEstudianteCursoComponent;
  let fixture: ComponentFixture<ListaEstudianteCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudianteCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudianteCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
