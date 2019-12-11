import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css'],
  providers: [DatePipe]
})
export class AvailabilityComponent implements OnInit {
  maxDate: Date;
  minDate1: Date;
  maxDate1: Date;
  anydate: Date
  minDate: Date;
  page: number = 1;
  dtoptions: any;
  rowsOnPage = 5;
  activeTab: Number = 0;
  txncount: Array<any>;
  txnDate: Array<any>;
  txntype: Array<any>;
  corridor: Array<any>;
  StartDate: any;
  public rowsOnPageSet = [5, 10, 50, 100, 300];
  constructor(public datepipe: DatePipe) { 
    this.maxDate = new Date();
  this.minDate1 = new Date(this.maxDate);
  }
 
  ngOnInit() {
  }

  gridsize: number = 10;
  updateSetting(event) {
    this.gridsize = event.value;
  }
  
}
