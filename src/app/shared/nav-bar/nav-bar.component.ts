import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent{
  @Output() open: EventEmitter<any> = new EventEmitter<any>();
  location: boolean;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.checkCurrentURL();
     });
  }

  private checkCurrentURL(){
    if(window.location.pathname.includes('details'))
      this.location = true;
    else
      this.location = false;
  }

  openSideBar(): void{
    this.open.emit(null);
  }
}
