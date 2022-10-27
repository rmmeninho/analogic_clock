import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogClockV2Component } from './analog-clock-v2.component';

describe('AnalogClockV2Component', () => {
  let component: AnalogClockV2Component;
  let fixture: ComponentFixture<AnalogClockV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalogClockV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalogClockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
