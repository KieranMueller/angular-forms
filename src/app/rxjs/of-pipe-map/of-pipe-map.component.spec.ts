import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfPipeMapComponent } from './of-pipe-map.component';

describe('OfPipeMapComponent', () => {
  let component: OfPipeMapComponent;
  let fixture: ComponentFixture<OfPipeMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfPipeMapComponent]
    });
    fixture = TestBed.createComponent(OfPipeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
