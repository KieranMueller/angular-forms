import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingnavComponent } from './routingnav.component';

describe('RoutingnavComponent', () => {
  let component: RoutingnavComponent;
  let fixture: ComponentFixture<RoutingnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingnavComponent]
    });
    fixture = TestBed.createComponent(RoutingnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
