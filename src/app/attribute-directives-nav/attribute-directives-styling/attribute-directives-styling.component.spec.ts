import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesStylingComponent } from './attribute-directives-styling.component';

describe('AttributeDirectivesStylingComponent', () => {
  let component: AttributeDirectivesStylingComponent;
  let fixture: ComponentFixture<AttributeDirectivesStylingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributeDirectivesStylingComponent]
    });
    fixture = TestBed.createComponent(AttributeDirectivesStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
