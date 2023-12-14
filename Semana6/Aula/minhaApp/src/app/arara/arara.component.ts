import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
  nome:string="arara azul";
  imagem:string="https://cdn.awsli.com.br/2500x2500/1111/1111472/produto/229782222/arara-pintura-digital-q6tcof7idx.jpg";
  descricao:string="arara pintura digital";

  public getToString():string{
    return this.nome + " " + this.descricao;
  }
}

