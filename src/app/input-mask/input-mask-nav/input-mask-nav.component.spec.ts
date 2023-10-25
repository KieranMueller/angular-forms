/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputMaskNavComponent } from './input-mask-nav.component';

describe('InputMaskNavComponent', () => {
  let component: InputMaskNavComponent;
  let fixture: ComponentFixture<InputMaskNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMaskNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMaskNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
