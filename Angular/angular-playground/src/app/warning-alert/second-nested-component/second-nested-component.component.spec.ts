import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNestedComponentComponent } from './second-nested-component.component';

describe('SecondNestedComponentComponent', () => {
  let component: SecondNestedComponentComponent;
  let fixture: ComponentFixture<SecondNestedComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondNestedComponentComponent]
    });
    fixture = TestBed.createComponent(SecondNestedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
