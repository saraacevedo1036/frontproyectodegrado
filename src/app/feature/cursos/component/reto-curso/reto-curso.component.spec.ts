import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoCursoComponent } from './reto-curso.component';

describe('RetoCursoComponent', () => {
  let component: RetoCursoComponent;
  let fixture: ComponentFixture<RetoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetoCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
