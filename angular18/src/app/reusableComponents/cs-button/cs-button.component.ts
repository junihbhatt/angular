import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cs-button',
  imports: [],
  templateUrl: './cs-button.component.html',
  styleUrl: './cs-button.component.css'
})
export class CsButtonComponent {
  @Input() btnClass: string = '';
  @Input() btnText: string = '';
  @Output() onBtnClick = new EventEmitter<any>();
  onClick(){
    this.onBtnClick.emit();
  }
}
