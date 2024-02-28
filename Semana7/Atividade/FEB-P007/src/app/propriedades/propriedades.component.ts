import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.scss']
})
export class PropriedadesComponent {
  @Input() propriedades: string[] = [];
}
