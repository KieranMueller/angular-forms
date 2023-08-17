/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component3Component } from './component3.component';

describe('Component3Component', () => {
  let component: Component3Component;
  let fixture: ComponentFixture<Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
