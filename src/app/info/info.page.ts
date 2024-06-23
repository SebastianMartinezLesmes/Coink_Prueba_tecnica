import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(
    private router:Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private http:HttpClient,
  ) { }

  ngOnInit() {
    this.getTipoDocumentos();
  }

  lista_tipos_docs: any = [];
  Tipo_doc: string = '';
  numero_cel: number = 0;
  numero_doc: number = 0;
  fecha_expedicion_doc: string = '';
  fecha_nacimiento: string = '';
  genero: string = '';

  email: string = '';
  confirm_email: string = '';
  error_confir_email: boolean = false;
  PIN: number = 0;
  confir_PIN: number = 0;
  error_confir_PIN: boolean = false;

  async presentLoading(route: string) {
    const loading = await this.loadingController.create({
      message: 'Cargando, por favor espera...',
      duration: 3000 // 3 segundos
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.router.navigate([route]);
  }

  async presentAlert(camposVacios: string[]) {
    let message = 'Los siguientes campos son obligatorios:\n';
    camposVacios.forEach((campo, index) => {
      message += `${index + 1}. ${campo}\n`;
    });
  
    const alert = await this.alertController.create({
      header: 'Campos Vacíos',
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }  

  async presentEmailFormatAlert() {
    const alert = await this.alertController.create({
      header: 'Formato de Email Incorrecto',
      message: 'Por favor, introduce un correo electrónico válido.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async getTipoDocumentos() {
    try {
      const response = await fetch('https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      this.lista_tipos_docs = await response.json();
      console.log(this.lista_tipos_docs);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  recuperarNumeroDocumento() {
    const storedNumber = localStorage.getItem('inputNumber');
    if (storedNumber) {
      this.numero_cel = parseInt(storedNumber, 10);
    }
  }

  camposVacios(): boolean {
    if (!this.Tipo_doc ||
        !this.numero_doc ||
        !this.fecha_expedicion_doc ||
        !this.fecha_nacimiento ||
        !this.genero ||
        !this.email ||
        !this.confirm_email ||
        !this.PIN ||
        !this.confir_PIN) {
      return true;
    }
    return false;
  }

  enviarDatos() {
    if (this.camposVacios()) {
      const camposFaltantes = [];
      if (!this.Tipo_doc) camposFaltantes.push('Tipo de documento');
      if (!this.numero_doc) camposFaltantes.push('Número de documento');
      if (!this.fecha_expedicion_doc) camposFaltantes.push('Fecha de expedición del documento');
      if (!this.fecha_nacimiento) camposFaltantes.push('Fecha de nacimiento');
      if (!this.genero) camposFaltantes.push('Género');
      if (!this.email) camposFaltantes.push('Email');
      if (!this.confirm_email) camposFaltantes.push('Confirmación de email');
      if (!this.PIN) camposFaltantes.push('PIN');
      if (!this.confir_PIN) camposFaltantes.push('Confirmación de PIN');
    
      this.presentAlert(camposFaltantes);
      return;
    }
    
    // Validación del formato de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.email)) {
      this.presentEmailFormatAlert();
      console.error('El formato del email no es válido.');
      return;
    }
    
    if (this.email !== this.confirm_email) {
      this.error_confir_email = true;
      setTimeout(() => {
        this.error_confir_email = false;
      }, 4000);
      console.error('Los correos electrónicos no coinciden.');
      return;
    }
    
    if (this.PIN !== this.confir_PIN) {
      this.error_confir_PIN = true;
      setTimeout(() => {
        this.error_confir_PIN = false;
      }, 4000);
      console.error('Los PIN no coinciden.');
      return;
    }
    
    this.recuperarNumeroDocumento();
    const datos = {
      Tipo_doc: this.Tipo_doc,
      numero_doc: this.numero_doc,
      fecha_expedicion_doc: this.fecha_expedicion_doc,
      fecha_nacimiento: this.fecha_nacimiento,
      genero: this.genero,
      email: this.email,
      PIN: this.PIN,
      numero_celular: this.numero_cel,
    };
    console.log(datos);
    this.presentLoading('./finalizar');
  }
  

  volver(){
    this.presentLoading('./numero-cel');
  }
}
