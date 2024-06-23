import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.page.html',
  styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  checked: boolean = false;

  volver(){
    this.router.navigate(['./info']);
  }
  toggleChecked(event: any) {
    this.checked = event.detail.checked;
  }

  finishProces(){
    if(this.checked === false){
      console.log('Aun no se han aceptado los terminos')
      return;
    }
    console.log('Se han aceptado los terminos')
    this.router.navigate(['./cuenta-creada'])
  }
}
