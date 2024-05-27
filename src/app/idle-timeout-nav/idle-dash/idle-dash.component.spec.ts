/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IdleDashComponent } from './idle-dash.component';

describe('IdleDashComponent', () => {
  let component: IdleDashComponent;
  let fixture: ComponentFixture<IdleDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdleDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdleDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
