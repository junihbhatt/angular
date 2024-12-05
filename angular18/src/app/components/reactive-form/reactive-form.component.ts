import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.minLength(4)]),
    lastName: new FormControl(''),
    userName: new FormControl('',[Validators.email]),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    isTC: new FormControl(''),
  });
  formValue: any;
  onSave(){
    this.formValue = this.studentForm.value;
  }
}
