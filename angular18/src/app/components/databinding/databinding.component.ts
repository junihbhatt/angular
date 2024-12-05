import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  courseName: string = "Angular 19";

  inputType = "checkbox";

  rollNumber = 3;
  isAdult = true;
  myClassName = "bg-warning"

  currentDate: Date = new Date();
  firstName = signal('Junaid');

  constructor(){
  }
  showAlert(msg: string){
    alert(msg)
  }
  changeCourseName(courseName:string){
    this.courseName = courseName;
    this.firstName.set('set method');
  }
}
