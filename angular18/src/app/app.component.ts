import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmpComponent } from "./components/add-emp/add-emp.component";
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralComponent } from "./components/structural/structural.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18';
}
