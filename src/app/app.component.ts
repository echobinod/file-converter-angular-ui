import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showMenu: boolean = false;
  mobileMenu: boolean = false;
  toogleMenu() {
    this.showMenu = !this.showMenu;
  }
}
