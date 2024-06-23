import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta-creada',
  templateUrl: './cuenta-creada.page.html',
  styleUrls: ['./cuenta-creada.page.scss'],
})
export class CuentaCreadaPage implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando, por favor espera...',
      duration: 3000 // 3 segundos
    });
    await loading.present();

    // Navegar a la página de ingreso después de que la pantalla de carga desaparezca
    const { role, data } = await loading.onDidDismiss();
    this.router.navigate(['./ingreso']);
  }

  volver() {
    this.presentLoading();
  }

}
