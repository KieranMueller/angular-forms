import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesNavComponent } from './attribute-directives-nav.component';

describe('AttributeDirectivesNavComponent', () => {
  let component: AttributeDirectivesNavComponent;
  let fixture: ComponentFixture<AttributeDirectivesNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributeDirectivesNavComponent]
    });
    fixture = TestBed.createComponent(AttributeDirectivesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
