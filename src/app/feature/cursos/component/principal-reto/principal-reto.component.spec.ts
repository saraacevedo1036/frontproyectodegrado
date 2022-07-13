import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalRetoComponent } from './principal-reto.component';

describe('PrincipalRetoComponent', () => {
  let component: PrincipalRetoComponent;
  let fixture: ComponentFixture<PrincipalRetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalRetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalRetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
