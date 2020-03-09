import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExercisePage } from './view-exercise.page';

describe('ViewExercisePage', () => {
  let component: ViewExercisePage;
  let fixture: ComponentFixture<ViewExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExercisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
