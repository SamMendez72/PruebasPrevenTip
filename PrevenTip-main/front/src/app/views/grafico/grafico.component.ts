import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GraficoComponent implements OnInit {

  data: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      // transforma los datos de la base de datos en el formato requerido por ngx
      this.data = data.map((d: { id_cliente: number, altura: number }) => ({
        name: d.id_cliente,
        value: d.altura
      }));
    });
  }

  // opciones del gráfico
  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Nombre';
  showYAxisLabel = true;
  yAxisLabel = 'Valor';
  colorScheme: Color = { 
    domain: ['#99CCE5', '#FF7F7F'], 
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
};

}