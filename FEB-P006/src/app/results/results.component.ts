import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: string[] = [];

  constructor(private resultsService: ResultsService) {}

  ngOnInit() {
    this.findResults();
  }

  findResults() {
    this.resultsService.getResults().subscribe(
      (data: any) => {
        this.results = data.results.slice(0, 5).map((result: any) => result.texto);
      },
      (err: HttpErrorResponse) => {
        console.error('Erro ao obter resultados:', err);
      }
    );
  }
}
