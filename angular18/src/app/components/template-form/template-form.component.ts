import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  studentObj:any = {
    'firstName': '',
    'lastName': '',
    'userName': '',
    'city': '',
    'state': '',
    'zip': '',
    'isTC': '',
  }
  formValue: any;

  onSubmit(){
    // debugger;
    this.formValue = this.studentObj;
  }
  resetForm(){
    this.studentObj = {
      'firstName': '',
      'lastName': '',
      'userName': '',
      'city': '',
      'state': '',
      'zip': '',
      'isTC': '',
    }
  }
}
