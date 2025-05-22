import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBarComponent } from './offer-bar.component';

describe('OfferBarComponent', () => {
  let component: OfferBarComponent;
  let fixture: ComponentFixture<OfferBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
