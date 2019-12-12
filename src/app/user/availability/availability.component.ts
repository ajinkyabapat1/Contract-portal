import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
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
  titleAlert: string = 'This field is required';
  constructor(public datepipe: DatePipe, private formbuilder:FormBuilder) { 
    this.maxDate = new Date();
  this.minDate1 = new Date(this.maxDate);
  }
 
  formGroup:FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm(){
this.formGroup=this.formbuilder.group({
  country:[null,Validators.required],
  jobs:[null,Validators.required],
  visa:[null,Validators.required],
  file:[null,Validators.required]
})

  }
  gridsize: number = 10;
  updateSetting(event) {
    this.gridsize = event.value;
  }
  
}
