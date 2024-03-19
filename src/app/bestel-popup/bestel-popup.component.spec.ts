import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestelPopupComponent } from './bestel-popup.component';

describe('BestelPopupComponent', () => {
  let component: BestelPopupComponent;
  let fixture: ComponentFixture<BestelPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestelPopupComponent]
    });
    fixture = TestBed.createComponent(BestelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
