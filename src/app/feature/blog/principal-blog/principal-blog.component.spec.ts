import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBlogComponent } from './principal-blog.component';

describe('PrincipalBlogComponent', () => {
  let component: PrincipalBlogComponent;
  let fixture: ComponentFixture<PrincipalBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
