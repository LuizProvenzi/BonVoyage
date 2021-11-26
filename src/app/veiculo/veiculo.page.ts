import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.page.html',
  styleUrls: ['./veiculo.page.scss'],
})
export class VeiculoPage implements OnInit {

  VEICULOS = [
    {Quantidade: 0}
  ]

  QtdeVeiculos: number;
  Veiculos: number;

  constructor() {}

  updateTotalVeiculos(value) {
    this.QtdeVeiculos = value;
    this.Veiculos = value;
    for (let i = 0; i<this.QtdeVeiculos; i++) {
      this.Veiculos[i] = this.VEICULOS[i].Quantidade;
      console.log(this.VEICULOS[i].Quantidade);
    }

  }

  ngOnInit() {
  }

}
