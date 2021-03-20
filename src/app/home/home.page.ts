import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  constante = 'numero';
  operador = '+';
  decimal = false;
  decimales = 0;
  pantalla = 0;
  memoria = 0;

  Numero(num: number) {
    switch (this.constante) {
      case 'numero':
        if (this.decimal) {
          this.decimales++;
          this.pantalla = this.pantalla + num * Math.pow(10, -this.decimales);
        } else {
          this.pantalla = this.pantalla * 10 + num;
        }
        break;
      case 'operador':
        this.pantalla = num;
        this.constante = 'numero';
        break;
      case 'resultado':
        this.memoria = 0;
        this.pantalla = num;
        this.constante = 'numero';
    }
  }

  Operador(opr: string) {
    this.calcular();
    this.operador = opr;
    this.memoria = this.pantalla;
    this.constante = 'operador';
  }

  calcular() {
    this.pantalla = eval('' + this.memoria + this.operador + '(' + this.pantalla + ')');
    this.memoria = 0;
    this.constante = 'resultado';
    this.operador = '+';
    this.decimal = false;
    this.decimales = 0;
  }

  Borrartodo() {
    this.pantalla = 0;
    this.memoria = 0;
    this.constante = 'numero';
    this.operador = '+';
    this.decimal = false;
    this.decimales = 0;
  }

  Borrarnumero() {
    this.pantalla = 0;
    this.constante = 'numero';
    this.decimal = false;
    this.decimales = 0;
  }

  Decimalnum() {
    this.decimal = true;
  }

  Signo() {
    this.pantalla = this.pantalla * -1;
  }

}
