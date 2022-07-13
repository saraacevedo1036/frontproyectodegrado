import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosBlogComponent } from './registros-blog.component';

describe('RegistrosBlogComponent', () => {
  let component: RegistrosBlogComponent;
  let fixture: ComponentFixture<RegistrosBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
