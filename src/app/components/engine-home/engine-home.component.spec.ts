import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineHomeComponent } from './engine-home.component';

describe('EngineHomeComponent', () => {
  let component: EngineHomeComponent;
  let fixture: ComponentFixture<EngineHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
