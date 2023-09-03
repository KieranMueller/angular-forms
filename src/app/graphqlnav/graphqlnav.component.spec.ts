import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlnavComponent } from './graphqlnav.component';

describe('GraphqlnavComponent', () => {
  let component: GraphqlnavComponent;
  let fixture: ComponentFixture<GraphqlnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphqlnavComponent]
    });
    fixture = TestBed.createComponent(GraphqlnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
