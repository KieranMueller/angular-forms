import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionNavComponent } from './content-projection-nav.component';

describe('ContentProjectionNavComponent', () => {
  let component: ContentProjectionNavComponent;
  let fixture: ComponentFixture<ContentProjectionNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentProjectionNavComponent]
    });
    fixture = TestBed.createComponent(ContentProjectionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
