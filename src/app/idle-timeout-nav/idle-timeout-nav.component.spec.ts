/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IdleTimeoutNavComponent } from './idle-timeout-nav.component';

describe('IdleTimeoutNavComponent', () => {
  let component: IdleTimeoutNavComponent;
  let fixture: ComponentFixture<IdleTimeoutNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdleTimeoutNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdleTimeoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
