import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCategoryComponent } from './parent-category.component';

describe('ParentCategoryComponent', () => {
  let component: ParentCategoryComponent;
  let fixture: ComponentFixture<ParentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
