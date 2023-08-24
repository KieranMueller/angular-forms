import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorengforComponent } from './morengfor.component';

describe('MorengforComponent', () => {
  let component: MorengforComponent;
  let fixture: ComponentFixture<MorengforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorengforComponent]
    });
    fixture = TestBed.createComponent(MorengforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
