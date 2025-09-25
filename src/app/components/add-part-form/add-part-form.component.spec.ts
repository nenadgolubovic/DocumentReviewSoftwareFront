import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartFormComponent } from './add-part-form.component';

describe('AddPartFormComponent', () => {
  let component: AddPartFormComponent;
  let fixture: ComponentFixture<AddPartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPartFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
