import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoebestelikComponent } from './hoebestelik.component';

describe('HoebestelikComponent', () => {
  let component: HoebestelikComponent;
  let fixture: ComponentFixture<HoebestelikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoebestelikComponent]
    });
    fixture = TestBed.createComponent(HoebestelikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
