import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ego';
  isActive:boolean;

  openSideBar():void{
    this.isActive = true;
  }

  closeSideBar():void{
    this.isActive = false;
  }
}
