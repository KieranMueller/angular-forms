/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutputNavComponent } from './output-nav.component';

describe('OutputNavComponent', () => {
  let component: OutputNavComponent;
  let fixture: ComponentFixture<OutputNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
