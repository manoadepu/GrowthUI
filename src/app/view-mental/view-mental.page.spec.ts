import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMentalPage } from './view-mental.page';

describe('ViewMentalPage', () => {
  let component: ViewMentalPage;
  let fixture: ComponentFixture<ViewMentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMentalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
