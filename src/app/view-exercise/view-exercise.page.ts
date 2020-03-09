import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-exercise',
  templateUrl: './view-exercise.page.html',
  styleUrls: ['./view-exercise.page.scss'],
})
export class ViewExercisePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }
}
