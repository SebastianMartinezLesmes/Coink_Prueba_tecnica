import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Pagina 4
  Tipo_doc: string = '';
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
    if (this.camposVacios() === true){
      console.log('Existen campos vacios')
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
    const datos = {
      Tipo_doc: this.Tipo_doc,
      numero_doc: this.numero_doc,
      fecha_expedicion_doc: this.fecha_expedicion_doc,
      fecha_nacimiento: this.fecha_nacimiento,
      genero: this.genero,
      email: this.email,
      PIN: this.PIN
    };
    console.log(datos);
  }
}
