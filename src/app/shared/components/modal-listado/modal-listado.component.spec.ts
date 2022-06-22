import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListadoComponent } from './modal-listado.component';

describe('ModalListadoComponent', () => {
  let component: ModalListadoComponent;
  let fixture: ComponentFixture<ModalListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
