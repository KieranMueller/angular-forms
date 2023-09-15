/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiNavComponent } from './di-nav.component';

describe('DiNavComponent', () => {
  let component: DiNavComponent;
  let fixture: ComponentFixture<DiNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
