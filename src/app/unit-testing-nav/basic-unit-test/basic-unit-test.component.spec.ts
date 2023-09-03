import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicUnitTestComponent } from './basic-unit-test.component';

describe('BasicUnitTestComponent', () => {
  let component: BasicUnitTestComponent;
  let fixture: ComponentFixture<BasicUnitTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicUnitTestComponent],
    });
    fixture = TestBed.createComponent(BasicUnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name should be', () => {
    expect(component.name).toBe("jasper's calculator");
  });
});
