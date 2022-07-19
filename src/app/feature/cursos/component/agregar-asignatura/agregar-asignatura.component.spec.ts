import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAsignaturaComponent } from './agregar-asignatura.component';

describe('AgregarAsignaturaComponent', () => {
  let component: AgregarAsignaturaComponent;
  let fixture: ComponentFixture<AgregarAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAsignaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
