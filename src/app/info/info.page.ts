import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(
    private router:Router,
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
    this.recuperarNumeroDocumento();
    const datos = {
      Tipo_doc: this.Tipo_doc,
      numero_doc: this.numero_doc,
      fecha_expedicion_doc: this.fecha_expedicion_doc,
      fecha_nacimiento: this.fecha_nacimiento,
      genero: this.genero,
      email: this.email,
      PIN: this.PIN,
      número_celular: this.numero_cel,
    };
    console.log(datos);
  }

  volver(){
    this.router.navigate(['./numero-cel'])
  }
}
