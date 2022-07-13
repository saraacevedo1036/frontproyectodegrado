import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalJuegoComponent } from './principal-juego.component';

describe('PrincipalJuegoComponent', () => {
  let component: PrincipalJuegoComponent;
  let fixture: ComponentFixture<PrincipalJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
