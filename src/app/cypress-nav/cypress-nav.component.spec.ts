/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CypressNavComponent } from './cypress-nav.component';

describe('CypressNavComponent', () => {
  let component: CypressNavComponent;
  let fixture: ComponentFixture<CypressNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CypressNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CypressNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
