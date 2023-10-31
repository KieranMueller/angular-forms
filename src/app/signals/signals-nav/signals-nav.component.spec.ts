/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignalsNavComponent } from './signals-nav.component';

describe('SignalsNavComponent', () => {
  let component: SignalsNavComponent;
  let fixture: ComponentFixture<SignalsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
