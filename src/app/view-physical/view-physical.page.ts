import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-physical',
  templateUrl: './view-physical.page.html',
  styleUrls: ['./view-physical.page.scss'],
})
export class ViewPhysicalPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backClicked() {
    this.location.back();
  }
}
