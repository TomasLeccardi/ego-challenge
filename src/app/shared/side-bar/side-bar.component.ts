import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent {
  @Input('isActive')isActive: boolean;
  @Output() desactive: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  desactiveSideBar():void{
    this.desactive.emit(null);
  }

}
