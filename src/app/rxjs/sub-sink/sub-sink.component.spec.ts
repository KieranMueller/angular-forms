import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSinkComponent } from './sub-sink.component';

describe('SubSinkComponent', () => {
  let component: SubSinkComponent;
  let fixture: ComponentFixture<SubSinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubSinkComponent]
    });
    fixture = TestBed.createComponent(SubSinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
