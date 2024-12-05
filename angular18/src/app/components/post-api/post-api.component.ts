import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { AlertComponentComponent } from '../../reusableComponents/alert-component/alert-component.component';
import { CsButtonComponent } from '../../reusableComponents/cs-button/cs-button.component';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, AlertComponentComponent, CsButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit{
  ngOnInit(): void {
    // this.getDepartments();
  }
  deptObj: any ={
    "departmentId": 0,
    "departmentName" : '',
    "departmentLogo" : '',
  }
  deptList: any[] = [];
  http = inject(HttpClient);
  constructor(private deptServ: DepartmentService){}
  onSave(){
    this.deptServ.saveNewDept(this.deptObj).subscribe((res:any)=>{
        if(res.result){
          alert('department created successfully');
          this.getDepartments();
        }else{
          alert(res.message)
        }
      })
  }
  
  getDepartments(){
    this.deptServ.getAllDept().subscribe((res:any)=>{
          this.deptList = res.data;
        })
  }
  onUpdate(){
    this.deptServ.editDept(this.deptObj).subscribe((res:any)=>{
      if(res.result){
        alert('department updated successfully');
        this.deptObj ={
          "departmentId": 0,
          "departmentName" : '',
          "departmentLogo" : '',
        }
        this.getDepartments();
      }else{
        alert(res.message)
      }
    })
  }
  onEdit(obj:any){
    this.deptObj = obj
  }
  onDelete(id:number){
    const isDelete = confirm('Are you sure you want to delete?');
    if(isDelete){

      this.http.delete(`https://projectapi.gerasim.in/api/EmployeeManagement/DeletedepartmentBydepartmentId?departmentId=${id}`).subscribe((res:any)=>{
        if(res.result){
          alert('department deleted successfully');
          this.getDepartments();
        }else{
          alert(res.message)
        }
      })
    }
  }
}
