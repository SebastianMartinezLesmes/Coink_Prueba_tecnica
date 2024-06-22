import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  window: string = 'start';

  // Mover a pagina 2
  loadForLogin() {
    this.window = 'login'
  }
  
  // Mover a pagina 3
  ChangeToRegister() {
    this.window = 'registrate'
  }
}
