import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.page.html',
  styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  checked: boolean = false;

  async presentLoading(route: string) {
    const loading = await this.loadingController.create({
      message: 'Cargando, por favor espera...',
      duration: 3000 // 3 segundos
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.router.navigate([route]);
  }

  volver() {
    this.presentLoading('./info');
  }

  toggleChecked(event: any) {
    this.checked = event.detail.checked;
  }

  finishProces() {
    if (this.checked === false) {
      console.log('Aun no se han aceptado los terminos')
      return;
    }
    console.log('Se han aceptado los terminos')
    this.presentLoading('./cuenta-creada');
  }
}
