import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoContenidoComponent } from './listado-contenido.component';

describe('ListadoContenidoComponent', () => {
  let component: ListadoContenidoComponent;
  let fixture: ComponentFixture<ListadoContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
