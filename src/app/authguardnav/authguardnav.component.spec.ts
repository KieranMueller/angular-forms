import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthguardnavComponent } from './authguardnav.component';

describe('AuthguardnavComponent', () => {
  let component: AuthguardnavComponent;
  let fixture: ComponentFixture<AuthguardnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthguardnavComponent]
    });
    fixture = TestBed.createComponent(AuthguardnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
