import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponentComponent } from '../../reusableComponents/alert-component/alert-component.component';
import { CsButtonComponent } from '../../reusableComponents/cs-button/cs-button.component';

@Component({
  selector: 'app-get-api',
  imports: [ AlertComponentComponent, CsButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList: any = [];
  customerList: any = [];
constructor(private http: HttpClient){
  this.getAllUsers();
  this.getAllcustomers();
}
getAllUsers(){
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
    this.userList=res;
  });
}
getAllcustomers(){
  this.http.get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers').subscribe((res:any)=>{
    this.customerList=res.data;
  });
}
}
