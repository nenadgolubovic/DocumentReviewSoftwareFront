import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEngineButtonComponent } from './add-engine-button.component';

describe('AddEngineButtonComponent', () => {
  let component: AddEngineButtonComponent;
  let fixture: ComponentFixture<AddEngineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEngineButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEngineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
