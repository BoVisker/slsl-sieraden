import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoeretourComponent } from './hoeretour.component';

describe('HoeretourComponent', () => {
  let component: HoeretourComponent;
  let fixture: ComponentFixture<HoeretourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoeretourComponent]
    });
    fixture = TestBed.createComponent(HoeretourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
