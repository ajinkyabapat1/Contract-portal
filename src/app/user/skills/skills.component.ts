import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
     
     'description' :[null, [Validators.required, Validators.minLength(5), Validators.maxLength(400)]]
    })
  }

  createItem() {
    return this.fb.group({
     skills: ['']
      
    })
  }

  
}
