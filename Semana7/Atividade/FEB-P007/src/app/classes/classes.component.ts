import { Component, Output, EventEmitter, Input } from '@angular/core';
interface Veiculo {
  Name: string;
}
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
  @Output() categoriaSelecionada = new EventEmitter<string>();
 
  @Output() veiculoSelecionado = new EventEmitter<Veiculo[]>();
  @Input() categorias: string[] = [];
  jsonData: any;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonContent = e.target?.result as string;
        const categorias = this.extractCategoriesFromJson(jsonContent);
        this.categorias = categorias;
      };
      reader.readAsText(file);
    }
  }

  extractCategoriesFromJson(jsonContent: string): string[] {
    try {
      const jsonObject = JSON.parse(jsonContent);
      return Object.keys(jsonObject);
    } catch (error) {
      console.error('Erro ao analisar o JSON:', error);
      return [];
    }
  }

  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada.emit(categoria);
    this.selecionarVeiculo(categoria);
  }

  selecionarVeiculo(categoria: string) {
    const veiculos: Veiculo[] = this.jsonData[categoria] || [];
    this.veiculoSelecionado.emit(veiculos);
  }
}
