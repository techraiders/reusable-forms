import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormControlsExampleComponent } from './custom-form-controls-example.component';

describe('CustomFormControlsExampleComponent', () => {
  let component: CustomFormControlsExampleComponent;
  let fixture: ComponentFixture<CustomFormControlsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormControlsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormControlsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
