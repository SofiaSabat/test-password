import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthZoneComponent } from './strength-zone.component';

describe('StrengthZoneComponent', () => {
  let component: StrengthZoneComponent;
  let fixture: ComponentFixture<StrengthZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
