import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-numero-cel',
  templateUrl: './numero-cel.page.html',
  styleUrls: ['./numero-cel.page.scss'],
})
export class NumeroCelPage implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  input: string = '';

  async presentLoading(route: string) {
    const loading = await this.loadingController.create({
      message: 'Cargando, por favor espera...',
      duration: 3000 // 3 segundos
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.router.navigate([route]);
  }

  addNumber(num: number) {
    this.input += num;
  }

  deleteNumber() {
    this.input = this.input.slice(0, -1);
  }

  formatNumber(input: string): string {
    if (input.length <= 3) {
      return input;
    } else {
      return `${input.slice(0, 3)} - ${input.slice(3)}`;
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error en el número de celular',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  confirmNumber() {
    if (!this.input) {
      this.presentAlert('No se ha ingresado ningún número.');
      return;
    } else if (this.input.length < 7) {
      this.presentAlert('El número de celular debe tener al menos 7 dígitos.');
      return;
    }
    
    console.log('Número ingresado:', this.input);
    localStorage.setItem('inputNumber', this.input);
    this.presentLoading('./info');
  }

  volver() {
    this.presentLoading('./ingreso');
  }

}
