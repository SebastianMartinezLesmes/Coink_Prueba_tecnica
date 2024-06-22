import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numero-cel',
  templateUrl: './numero-cel.page.html',
  styleUrls: ['./numero-cel.page.scss'],
})
export class NumeroCelPage implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

  input: string = '';

  addNumber(num: number) {
    this.input += num;
  }

  deleteNumber() {
    this.input = this.input.slice(0, -1);
  }

  confirmNumber() {
    if (!this.input){
      console.log('No se ha ingresado ningun numero');
      return
    } else if (this.input.length <= 6) {
      console.log('Número muy pequeño');
      return;
    }
    console.log('Número ingresado:', this.input);
    this.router.navigate(['./info'])
  }

  volver(){
    this.router.navigate(['./ingreso'])
  }

  formatNumber(input: string): string {
    if (input.length <= 3) {
      return input;
    } else {
      return `${input.slice(0, 3)} - ${input.slice(3)}`;
    }
  }
}
