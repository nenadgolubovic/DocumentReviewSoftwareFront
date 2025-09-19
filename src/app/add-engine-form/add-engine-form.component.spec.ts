import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEngineFormComponent } from './add-engine-form.component';

describe('AddEngineFormComponent', () => {
  let component: AddEngineFormComponent;
  let fixture: ComponentFixture<AddEngineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEngineFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEngineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
