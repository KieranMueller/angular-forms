/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoresolveComponent } from './noresolve.component';

describe('NoresolveComponent', () => {
  let component: NoresolveComponent;
  let fixture: ComponentFixture<NoresolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoresolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoresolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
