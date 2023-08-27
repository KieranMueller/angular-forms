import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFirstComponent } from './rxjs-first.component';

describe('RxjsFirstComponent', () => {
  let component: RxjsFirstComponent;
  let fixture: ComponentFixture<RxjsFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsFirstComponent]
    });
    fixture = TestBed.createComponent(RxjsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
