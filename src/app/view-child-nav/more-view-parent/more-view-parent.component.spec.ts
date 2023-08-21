import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreViewParentComponent } from './more-view-parent.component';

describe('MoreViewParentComponent', () => {
  let component: MoreViewParentComponent;
  let fixture: ComponentFixture<MoreViewParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreViewParentComponent]
    });
    fixture = TestBed.createComponent(MoreViewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
