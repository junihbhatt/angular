import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-structural',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  val1: string = ''; 
  val2: string = ''; 
  isActive: boolean = false;
  stateVal:string = '';
  cityArray: string [] = ['Pune', 'Delhi', 'Srinagar', 'Chandigarh'];
  studentList: any[] = [
    {
      s_id:1,
      s_name:"Junaid",
      gender: 'Male',
      marks: '97',
      city: 'Srinagar',
      isActive: true
    },
    {
      s_id:2,
      s_name:"Rishabh",
      gender: 'Male',
      marks: '92',
      city: 'Punjab',
      isActive: true
    },
    {
      s_id:3,
      s_name:"Rahul",
      gender: 'Male',
      marks: '77',
      city: 'Pune',
      isActive: false
    },
    {
      s_id:4,
      s_name:"Karam",
      gender: 'Male',
      marks: '98',
      city: 'Chandigarh',
      isActive: true
    },

    {
      s_id:5,
      s_name:"Test",
      gender: 'Female',
      marks: '60',
      city: 'Testcity',
      isActive: true
    },

    {
      s_id:5,
      s_name:"Akhil",
      gender: 'Male',
      marks: '80',
      city: 'UP',
      isActive: false
    },
  ]
  styleData : any = {
    'color' : '#764d00',
    'background' : '#ffcf78',
    'width' : '350px',
    'height' : '150px',
    'display': 'flex',
    'align-items' : 'center',
    'justify-content' : 'center'
  }
  div1BGColor: string = 'bg-primary';
  isDiv2Active: boolean = false;
  toggleDivStatus(){
    this.isDiv2Active = !this.isDiv2Active;
  }
  showDiv1(){
    this.isDiv1Visible = true
  }
  hideDiv1(){
    this.isDiv1Visible = false
  }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }
  addBlueClass(){
    this.div1BGColor = 'bg-primary';
  }
  addRedClass(){
    this.div1BGColor = 'bg-danger';
  }
}
