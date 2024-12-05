import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  imports: [],
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.css'
})
export class AlertComponentComponent {
 @Input() msg: string = '';
 @Input() alertClass: string = 'alert-warning';
}
