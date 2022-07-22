import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRespuestasCorrectasComponent } from './lista-respuestas-correctas.component';

describe('ListaRespuestasCorrectasComponent', () => {
  let component: ListaRespuestasCorrectasComponent;
  let fixture: ComponentFixture<ListaRespuestasCorrectasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRespuestasCorrectasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRespuestasCorrectasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
