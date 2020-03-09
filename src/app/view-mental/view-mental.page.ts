import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-mental',
  templateUrl: './view-mental.page.html',
  styleUrls: ['./view-mental.page.scss'],
})
export class ViewMentalPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
