import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoCursoComponent } from './juego-curso.component';

describe('JuegoCursoComponent', () => {
  let component: JuegoCursoComponent;
  let fixture: ComponentFixture<JuegoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
