import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildNavComponent } from './view-child-nav.component';

describe('ViewChildNavComponent', () => {
  let component: ViewChildNavComponent;
  let fixture: ComponentFixture<ViewChildNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChildNavComponent]
    });
    fixture = TestBed.createComponent(ViewChildNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
