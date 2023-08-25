import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsnavComponent } from './materialsnav.component';

describe('MaterialsnavComponent', () => {
  let component: MaterialsnavComponent;
  let fixture: ComponentFixture<MaterialsnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialsnavComponent]
    });
    fixture = TestBed.createComponent(MaterialsnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
