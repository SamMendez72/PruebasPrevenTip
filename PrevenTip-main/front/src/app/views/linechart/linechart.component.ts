import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-linechart',
  template: `
    <canvas id="lineChart"></canvas>
  `
})

export class LinechartComponent implements OnInit {
  chart: Chart;
  data: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.data = data;
      this.createChart();
    });
  }

  createChart(): void {
    const canvas = document.getElementById('lineChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.data.map((d) => d.year),
        datasets: [
          {
            label: 'Population',
            data: this.data.map((d) => d.population),
            borderColor: '#3cba9f',
            fill: false
          }
          
        ]
      },
    });
   }
  }
}