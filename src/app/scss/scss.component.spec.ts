/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScssComponent } from './scss.component';

describe('ScssComponent', () => {
  let component: ScssComponent;
  let fixture: ComponentFixture<ScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
