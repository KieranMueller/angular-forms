import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingNavComponent } from './unit-testing-nav.component';

describe('UnitTestingNavComponent', () => {
  let component: UnitTestingNavComponent;
  let fixture: ComponentFixture<UnitTestingNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitTestingNavComponent]
    });
    fixture = TestBed.createComponent(UnitTestingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
