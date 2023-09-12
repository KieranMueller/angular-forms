/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestParamComponent } from './test-param.component';

describe('TestParamComponent', () => {
  let component: TestParamComponent;
  let fixture: ComponentFixture<TestParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
