import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRetosComponent } from './tabla-retos.component';

describe('TablaRetosComponent', () => {
  let component: TablaRetosComponent;
  let fixture: ComponentFixture<TablaRetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
