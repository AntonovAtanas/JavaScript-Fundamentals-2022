import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNestedComponentComponent } from './first-nested-component.component';

describe('FirstNestedComponentComponent', () => {
  let component: FirstNestedComponentComponent;
  let fixture: ComponentFixture<FirstNestedComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstNestedComponentComponent]
    });
    fixture = TestBed.createComponent(FirstNestedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
