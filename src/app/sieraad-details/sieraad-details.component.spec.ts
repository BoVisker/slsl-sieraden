import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SieraadDetailsComponent } from './sieraad-details.component';

describe('SieraadDetailsComponent', () => {
  let component: SieraadDetailsComponent;
  let fixture: ComponentFixture<SieraadDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SieraadDetailsComponent]
    });
    fixture = TestBed.createComponent(SieraadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
