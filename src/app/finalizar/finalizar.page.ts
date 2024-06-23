import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.page.html',
  styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {

  checked: boolean = false;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aceptar Términos',
      message: 'Debes aceptar los términos antes de proceder.',
      buttons: ['OK']
    });

    await alert.present();
  }

  volver() {
    this.presentLoading('./info');
  }

  toggleChecked(event: any) {
    this.checked = event.detail.checked;
  }

  finishProces() {
    if (this.checked === false) {
      this.presentAlert(); 
      return;
    }

    console.log('Se han aceptado los términos');
    this.presentLoading('./cuenta-creada');
  }
}
