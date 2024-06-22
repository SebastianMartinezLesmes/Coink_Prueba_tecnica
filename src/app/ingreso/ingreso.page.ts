import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  // Mover a pagina 3
  ChangeToRegister() {
    this.router.navigate(['./numero-cel']);
  }
}
