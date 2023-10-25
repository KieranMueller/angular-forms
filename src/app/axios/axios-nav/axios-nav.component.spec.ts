/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AxiosNavComponent } from './axios-nav.component';

describe('AxiosNavComponent', () => {
  let component: AxiosNavComponent;
  let fixture: ComponentFixture<AxiosNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiosNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
