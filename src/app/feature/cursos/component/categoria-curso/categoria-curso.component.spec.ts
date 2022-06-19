import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCursoComponent } from './categoria-curso.component';

describe('CategoriaCursoComponent', () => {
  let component: CategoriaCursoComponent;
  let fixture: ComponentFixture<CategoriaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
