import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router:Router,
    private loadingController: LoadingController,
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.loadForLogin();
    }, 3000); // 3 segundos
  }

  async presentLoading(route: string) {
    const loading = await this.loadingController.create({
      message: 'Iniciando, por favor espere...',
      duration: 5000, // 5 segundos
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.router.navigate([route]);
  }

  loadForLogin() {
    this.presentLoading('./ingreso');
  }
}
