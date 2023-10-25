/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputNavComponent } from './input-nav.component';

describe('InputNavComponent', () => {
  let component: InputNavComponent;
  let fixture: ComponentFixture<InputNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
