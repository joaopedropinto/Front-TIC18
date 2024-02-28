import { Component, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Veiculo {
  Name: string;
  Model: string;
  Engine: string;
  NumberOfPassengers: string;
  Autonomia: string;
  Alcance: string;
  Teto: string;
}

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.scss']
})
export class ObjetosComponent implements OnChanges {
  @Input() categoria: string = '';
  veiculos: Veiculo[] = [];
  itemSelecionado: Veiculo | null = null;

  constructor(private http: HttpClient) {}

  ngOnChanges() {
    if (this.categoria) {
      this.http.get<any>('assets/veiculos.json').subscribe(data => {
        this.veiculos = data[this.categoria] || [];
        this.itemSelecionado = null;
      });
    }
  }
  
  selecionarVeiculo(veiculo: Veiculo) {
    this.itemSelecionado = veiculo;
  }
}
