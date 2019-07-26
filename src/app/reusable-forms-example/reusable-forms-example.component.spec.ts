import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableFormsExampleComponent } from './reusable-forms-example.component';

describe('ReusableFormsExampleComponent', () => {
  let component: ReusableFormsExampleComponent;
  let fixture: ComponentFixture<ReusableFormsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableFormsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
