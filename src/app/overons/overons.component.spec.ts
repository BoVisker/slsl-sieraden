import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OveronsComponent } from './overons.component';

describe('OveronsComponent', () => {
  let component: OveronsComponent;
  let fixture: ComponentFixture<OveronsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OveronsComponent]
    });
    fixture = TestBed.createComponent(OveronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
