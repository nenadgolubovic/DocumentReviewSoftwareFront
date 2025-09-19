import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartButtonComponent } from './add-part-button.component';

describe('AddPartButtonComponent', () => {
  let component: AddPartButtonComponent;
  let fixture: ComponentFixture<AddPartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPartButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
