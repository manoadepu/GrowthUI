import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhysicalPage } from './view-physical.page';

describe('ViewPhysicalPage', () => {
  let component: ViewPhysicalPage;
  let fixture: ComponentFixture<ViewPhysicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPhysicalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPhysicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
