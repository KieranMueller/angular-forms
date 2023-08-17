import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifnavComponent } from './ngifnav.component';

describe('NgifnavComponent', () => {
  let component: NgifnavComponent;
  let fixture: ComponentFixture<NgifnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgifnavComponent]
    });
    fixture = TestBed.createComponent(NgifnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
