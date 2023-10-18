/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CliNavComponent } from './cli-nav.component';

describe('CliNavComponent', () => {
  let component: CliNavComponent;
  let fixture: ComponentFixture<CliNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
