import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {}


  ngOnInit() {
    this.checkoutForm = this.fb.group({
      fullName: null
    })
  }

  formInitialized(name: string, form: FormGroup) {
    this.checkoutForm.setControl(name, form);
    console.log(this.checkoutForm)
  }

}
