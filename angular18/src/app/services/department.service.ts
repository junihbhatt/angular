import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  apiURL:string = 'https://projectapi.gerasim.in/api/EmployeeManagement/';
  getAllDept(){
    return this.http.get(`${this.apiURL}GetParentDepartment`);
  }
  saveNewDept(obj:any){
    return this.http.post(`${this.apiURL}AddNewDepartment`, obj);
  }
  editDept(obj:any){
    return this.http.post(`${this.apiURL}UpdateDepartment`, obj);
  }
}
