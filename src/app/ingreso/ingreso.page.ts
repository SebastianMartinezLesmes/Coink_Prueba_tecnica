import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentLoading(route: string) {
    const loading = await this.loadingController.create({
      message: 'Cargando, por favor espera...',
      duration: 3000 // 3 segundos
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.router.navigate([route]);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  registrarme() {
    this.presentLoading('./numero-cel');
  }

  ingreso() {
    const header = 'Lo sentimos, opción no disponible en el momento';
    const message = 'Nuestro equipo de desarrollo está trabajando en la implementación de esta página. Gracias por su comprensión.';
    this.presentAlert(header, message);
  }
}
